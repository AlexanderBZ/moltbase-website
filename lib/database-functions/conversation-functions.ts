"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/** Get the user's conversations sorted by most-recent update. */
export async function getConversations(
  userId?: string | null
): Promise<models.IConversation[]> {
  if (!userId) return [];

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("conversations")
    .select("id, title, user_id, created_at, updated_at")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false });

  if (error) return [];
  return data as models.IConversation[];
}

/** Fetch a single conversation + its messages (if any). */
export async function getConversation(
  id: string
): Promise<models.IConversation | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("conversations")
    .select("*, messages(*)") // Supabase FK embed
    .eq("id", id)
    .maybeSingle();

  if (error) return null;
  return data as unknown as models.IConversation;
}

/** Delete a single conversation. */
export async function removeConversation({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  const supabase = await createClient();
  const { error } = await supabase.from("conversations").delete().eq("id", id);

  if (error) return { error: "Unauthorized" };

  revalidatePath("/");
  revalidatePath(path);
}

/** Delete *all* conversations for the logged-in user. */
export async function clearConversations() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Unauthorized" };

  const { error } = await supabase
    .from("conversations")
    .delete()
    .eq("user_id", user.id);

  if (error) return { error: "Unauthorized" };

  revalidatePath("/");
  redirect("/");
}

/** Retrieve a shared conversation by id (only if it has a share_path). */
export async function getSharedConversation(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("conversations")
    .select("payload")
    .eq("id", id)
    .not("payload->sharePath", "is", null)
    .maybeSingle();

  if (error) return { error: "Unauthorized" };

  return (data?.payload as models.IConversation) ?? null;
}

/** Toggle sharing on a conversation. Returns the updated conversation with share_path set. */
export async function shareConversation(conversation: models.IConversation) {
  const newConversation = {
    ...conversation,
    share_path: `/share/${conversation.id}`,
  };

  const supabase = await createClient();

  const { error } = await supabase
    .from("conversations")
    .update(newConversation)
    .eq("id", conversation.id)
    .throwOnError();

  if (error) return { error: "Unauthorized" };

  return newConversation;
}

/** Create a new conversation and return its ID. */
export async function createConversation() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Unauthorized" };

  const { data: conversation, error } = await supabase
    .from("conversations")
    .insert({
      title: "New conversation",
      user_id: user.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) return { error: "Failed to create conversation" };

  return conversation;
}

/** Update a conversation's title. */
export async function updateConversationTitle(id: string, title: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("conversations")
    .update({
      title,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) return { error: "Failed to update conversation title" };
  return { success: true };
}

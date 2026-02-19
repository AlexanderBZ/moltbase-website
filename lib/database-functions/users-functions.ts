"use server";

import { createClient } from "@/lib/supabase/server";

/**
 * Create a new user
 * @param user User data without id, created_at and updated_at
 * @returns The created user
 */
export async function createUser(
  user: Omit<models.IUser, "id" | "created_at" | "updated_at">
): Promise<models.IUser> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("users")
      .insert([user])
      .select()
      .single();

    if (error) throw error;

    // Convert string dates to Date objects
    return {
      ...data,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

/**
 * Get a user by ID
 * @param id User ID
 * @returns User if found, null otherwise
 */
export async function getUserById(id: string): Promise<models.IUser | null> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    if (!data) return null;

    // Convert string dates to Date objects
    return {
      ...data,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    };
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Get all users
 * @returns Array of users
 */
export async function getAllUsers(): Promise<models.IUser[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase.from("users").select("*");

    if (error) throw error;

    // Convert string dates to Date objects
    return data.map((user) => ({
      ...user,
      created_at: new Date(user.created_at),
      updated_at: new Date(user.updated_at),
    }));
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
}

/**
 * Update a user
 * @param id User ID
 * @param updates User data to update
 * @returns The updated user
 */
export async function updateUser(
  id: string,
  updates: Partial<Omit<models.IUser, "id" | "created_at" | "updated_at">>
): Promise<models.IUser | null> {
  try {
    const supabase = await createClient();

    const updateData = {
      ...updates,
      updated_at: new Date(),
    };

    const { data, error } = await supabase
      .from("users")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    if (!data) return null;

    // Convert string dates to Date objects
    return {
      ...data,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    };
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a user
 * @param id User ID
 * @returns True if deleted, false if user not found
 */
export async function deleteUser(id: string): Promise<boolean> {
  try {
    const supabase = await createClient();

    const { error } = await supabase.from("users").delete().eq("id", id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
    throw error;
  }
}

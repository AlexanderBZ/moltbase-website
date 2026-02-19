"use server";

import { createClient } from "@/lib/supabase/server";

/**
 * Check if an email exists in the demo requests and is approved (status=true)
 * @param email The email to check
 * @returns True if the email is approved for demo, false otherwise
 */
export async function checkDemoStatus(email: string): Promise<boolean> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("demos")
      .select("status")
      .eq("work_email", email)
      .maybeSingle();

    if (error) throw error;

    // Return true if the user exists and is approved (status=1)
    return data?.status === 1;
  } catch (error) {
    console.error(`Error checking demo status for ${email}:`, error);
    return false;
  }
}

/**
 * Create a new demo request entry
 * @param data Demo request data without created_at and status
 * @returns The created demo request entry or null if there was an error
 */
export async function createDemoRequest(
  data: Omit<models.IDemoSubmission, "created_at" | "status">
): Promise<models.IDemoSubmission | null> {
  try {
    const supabase = await createClient();

    // Check if email already exists in demo requests
    const { data: existing, error: lookupError } = await supabase
      .from("demos")
      .select("id")
      .eq("work_email", data.work_email)
      .maybeSingle();

    if (lookupError) throw lookupError;

    // If email already exists, return null
    if (existing) {
      return null;
    }

    // Prepare data with default values
    const entryData = {
      ...data,
      created_at: new Date().toISOString(),
      status: 0, // Default to unapproved
    };

    const { data: result, error } = await supabase
      .from("demos")
      .insert([entryData])
      .select()
      .single();

    if (error) throw error;

    // Convert string date to Date object
    return {
      ...result,
      created_at: new Date(result.created_at),
    };
  } catch (error) {
    console.error("Error creating demo request:", error);
    return null;
  }
}

/**
 * Get all demo request entries
 * @returns Array of demo request entries
 */
export async function getAllDemoRequests(): Promise<models.IDemoSubmission[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("demos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Convert string dates to Date objects
    return data.map((entry) => ({
      ...entry,
      created_at: new Date(entry.created_at),
    }));
  } catch (error) {
    console.error("Error fetching all demo requests:", error);
    return [];
  }
}

/**
 * Update demo request status
 * @param email Email of the demo request to update
 * @param status New status value
 * @returns The updated demo request or null if not found
 */
export async function updateDemoStatus(
  email: string,
  status: number
): Promise<models.IDemoSubmission | null> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("demos")
      .update({ status })
      .eq("work_email", email)
      .select()
      .single();

    if (error) throw error;
    if (!data) return null;

    // Convert string date to Date object
    return {
      ...data,
      created_at: new Date(data.created_at),
    };
  } catch (error) {
    console.error(`Error updating demo status for ${email}:`, error);
    return null;
  }
}

/**
 * Get a single demo request by email
 * @param email Email to look up
 * @returns The demo request or null if not found
 */
export async function getDemoRequestByEmail(
  email: string
): Promise<models.IDemoSubmission | null> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("demos")
      .select("*")
      .eq("work_email", email)
      .maybeSingle();

    if (error) throw error;
    if (!data) return null;

    // Convert string date to Date object
    return {
      ...data,
      created_at: new Date(data.created_at),
    };
  } catch (error) {
    console.error(`Error fetching demo request for ${email}:`, error);
    return null;
  }
}

/**
 * Delete a demo request
 * @param email Email of the request to delete
 * @returns True if deleted successfully, false otherwise
 */
export async function deleteDemoRequest(email: string): Promise<boolean> {
  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from("demos")
      .delete()
      .eq("work_email", email);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting demo request for ${email}:`, error);
    return false;
  }
}

/**
 * Get paginated demo requests
 * @param page Page number (starting from 1)
 * @param pageSize Number of entries per page
 * @returns Paginated array of demo requests and total count
 */
export async function getPaginatedDemoRequests(
  page: number = 1,
  pageSize: number = 10
): Promise<{
  entries: models.IDemoSubmission[];
  total: number;
}> {
  try {
    const supabase = await createClient();
    const start = (page - 1) * pageSize;

    const { data, error, count } = await supabase
      .from("demos")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(start, start + pageSize - 1);

    if (error) throw error;

    // Convert string dates to Date objects
    const entries = data.map((entry) => ({
      ...entry,
      created_at: new Date(entry.created_at),
    }));

    return {
      entries,
      total: count || 0,
    };
  } catch (error) {
    console.error("Error fetching paginated demo requests:", error);
    return {
      entries: [],
      total: 0,
    };
  }
}

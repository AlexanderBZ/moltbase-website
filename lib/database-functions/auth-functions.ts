"use server";

import { encodedRedirect } from "../supabase/redirect";
import { createClient } from "../supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { guardDemo } from "@/lib/guards/demo";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name =
    formData.get("name")?.toString() || email?.split("@")[0] || "New User";
  const supabase = await createClient();

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required"
    );
  }

  const demoGuard = await guardDemo(email);
  if (demoGuard.error) {
    return encodedRedirect("error", "/sign-in", demoGuard.error.message);
  }

  // Create the user without specifying email confirmation options.
  const { data: authData, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  }

  // Create a user record in the 'users' table
  if (authData.user) {
    const { error: insertError } = await supabase.from("users").insert({
      id: authData.user.id,
      name: name,
      email: email,
      photo_url: "",
    });

    if (insertError) {
      console.error("Error creating user profile:", insertError);
      return encodedRedirect("error", "/sign-up", insertError.message);
    }
  }

  // Automatically sign in the user after sign-up.
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    console.error(signInError.code + " " + signInError.message);
    return encodedRedirect("error", "/sign-in", signInError.message);
  }

  // Redirect to editor with a document
  return redirect("/chat");
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const demoGuard = await guardDemo(email);
  if (demoGuard.error) {
    return encodedRedirect("error", "/sign-in", demoGuard.error.message);
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/chat");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const demoGuard = await guardDemo(email);
  if (demoGuard.error) {
    return encodedRedirect("error", "/sign-in", demoGuard.error.message);
  }

  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password"
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password."
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required"
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match"
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed"
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const checkAuth = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/sign-up");
  }
};

"use server";

import { CredentialsSignin } from "next-auth";
import { signIn } from "../auth";

export async function handleLogin(formData: FormData) {
  try {
    await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });

    return { success: true };
  } catch (err) {
    if (err instanceof CredentialsSignin) {
      return { error: "Invalid credentials." };
    }

    console.error("Unhandled error during sign-in:", err);
    return { error: "Something went wrong. Please try again." };
  }
}

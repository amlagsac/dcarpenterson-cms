"use server";

import { signIn } from "../auth";

export async function handleSignIn(formData: FormData) {
  const result = await signIn("credentials", {
    redirect: false,
    email: formData.get("email"),
    password: formData.get("password"),
  });

  return result;
}

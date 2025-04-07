"use client";

import { handleSignIn } from "@/lib/actions/sign-in";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <form
      action={async (formData) => {
        const result = await handleSignIn(formData);

        if (result?.error) {
          setError("Invalid credentials.");
        } else {
          router.push("/dashboard");
        }
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign In</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

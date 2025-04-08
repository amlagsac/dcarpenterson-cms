"use client";

import Button from "@/components/button/Button";
import TextField from "@/components/input/Textfield";
import Box from "@/components/layout/Box";
import { handleLogin } from "@/lib/actions/login";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Label from "@/components/input/Label";
import Checkbox from "@/components/input/Checkbox";

export default function Login() {
  const router: AppRouterInstance = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  async function handleSubmitLoginForm(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    try {
      setLoading(true);
      const formData: FormData = new FormData(event.target as HTMLFormElement);
      const response = await handleLogin(formData);

      if (response?.error) {
        setError("Invalid credentials.");
      } else {
        router.push("/dashbboard");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      dropShadow="2xl"
      className="w-full max-w-md p-8 border rounded-4xl bg-[#F9FAFB]"
    >
      <form
        onSubmit={handleSubmitLoginForm}
        className="flex flex-col space-y-6"
      >
        <div className="flex justify-center">
          <Image
            src="/DCS_Logo.png"
            width={150}
            height={150}
            alt="Logo of DCS"
          />
        </div>
        {error && (
          <p className="text-sm text-red-600 text-center font-medium">
            {error}
          </p>
        )}
        <div className="flex flex-col">
          <Label
            htmlFor="email"
            className="mb-1 text-sm font-semibold text-gray-600"
          >
            Email
          </Label>
          <TextField
            name="email"
            type="email"
            required
            placeholder="example@email.com"
            variant="primary"
            error={error}
            className="px-4 py-2 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <Label
            htmlFor="password"
            className="mb-1 text-sm font-semibold text-gray-600"
          >
            Password
          </Label>
          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            required
            variant="primary"
            error={error}
            className="px-4 py-2 rounded-lg"
          />
          <Label
            htmlFor="showPassword"
            className="mt-2 text-sm flex items-center gap-2 text-gray-700"
          >
            <Checkbox
              name="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </Label>
        </div>
        <Button
          variant="primary"
          size="medium"
          type="submit"
          loading={loading}
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer transition"
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
}

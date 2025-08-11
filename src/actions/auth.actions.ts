"use server";

import { createAdminClient, getLoggedInAdminUser } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { APPWRITE_SESSION_COOKIE } from "@/lib/config/app.config";
import { loginSchema, signUpSchema } from "../schemas/auth.schema";
import { z } from "zod";
import { ID } from "node-appwrite";
import { isAppwriteException } from "@/lib/utils";

export type Errors = {
  error?: string;
  fieldErrors?: {
    email?: string[];
    password?: string[];
  };
};

export type SignupErrors = {
  error?: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
};

export async function loginWithEmail(prevState: Errors, formData: FormData) {
  // Extract and validate form data using Zod
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // Return early if validation fails
  if (!validatedFields.success) {
    return {
      error: "Validation failed",
      fieldErrors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    // Set session cookie first
    const cookieStore = await cookies();
    cookieStore.set(APPWRITE_SESSION_COOKIE, session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
    });

    if (await getLoggedInAdminUser()) {
      redirect("/admin");
    } else {
      redirect("/");
    }
  } catch (error) {
    // Let Next.js handle redirect errors triggered by redirect()
    if (isRedirectError(error)) {
      throw error;
    }
    console.log(error);
    // error is an AppwriteException
    if (isAppwriteException(error)) {
      if (error.type === "user_invalid_credentials") {
        return { error: "Invalid email or password." };
      }
      if (error.type === "rate_limit_exceeded") {
        return { error: "Too many requests. Please try again later." };
      }
    }

    return { error: "Something went wrong" };
  }
}

export async function registerWithEmail(prevState: Errors, formData: FormData) {
  // Extract and validate form data using Zod
  const validatedFields = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // Return early if validation fails
  if (!validatedFields.success) {
    return {
      error: "Validation failed",
      fieldErrors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  const { email, password, name } = validatedFields.data;

  try {
    const { account } = await createAdminClient();
    await account.create(ID.unique(), email, password, name);
  } catch (error) {
    // error is an AppwriteException
    if (isAppwriteException(error)) {
      if (error.type === "user_already_exists") {
        return { error: "A user with this email already exists." };
      }
      if (error.type === "rate_limit_exceeded") {
        return { error: "Too many requests. Please try again later." };
      }
    }
    return { error: "Something went wrong" };
  }
  redirect("/login");
}

export async function signOut() {
  try {
    const { account } = await createAdminClient();
    await account.deleteSession("current");
  } catch {
    // Ignore errors, proceed to clear cookie and redirect
  }
  const cookieStore = await cookies();
  cookieStore.set(APPWRITE_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: new Date(0),
    path: "/",
  });
  redirect("/");
}

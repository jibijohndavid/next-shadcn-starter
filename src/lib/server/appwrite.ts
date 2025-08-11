// src/lib/server/appwrite.js
"use server";
import { Client, Account } from "node-appwrite";
import { cookies } from "next/headers";
import { APPWRITE_SESSION_COOKIE } from "../config/app.config";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT ?? "");

  const cookieStore = await cookies();
  const session = cookieStore.get(APPWRITE_SESSION_COOKIE);
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT ?? "")
    .setKey(process.env.NEXT_APPWRITE_KEY ?? "");

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export async function getLoggedInAdminUser() {
  const user = await getLoggedInUser();
  return user && Array.isArray(user.labels) && user.labels.includes("admin")
    ? user
    : null;
}

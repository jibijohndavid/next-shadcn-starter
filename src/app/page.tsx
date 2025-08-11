import { Button } from "@/components/ui/button";
import { getLoggedInUser } from "@/lib/server/appwrite";
import Link from "next/link";
import { signOut } from "../actions/auth.actions";

export default async function Home() {
  const user = await getLoggedInUser();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p className="text-2xl">Welcome back {user?.name || "Guest"}</p>
      <div className="flex gap-4">
        {user ? (
          <Button onClick={signOut} variant="destructive">
            Sign-out
          </Button>
        ) : (
          <Button asChild>
            <Link href="/login">Sign-in</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

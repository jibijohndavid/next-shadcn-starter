import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isAppwriteException(
  error: unknown
): error is { code: number; type: string; message?: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    "type" in error
  );
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 * This function handles conditional classes and resolves Tailwind CSS conflicts
 *
 * @param inputs - Class names, objects, or arrays of class names
 * @returns Merged and deduplicated class string
 *
 * @example
 * cn("px-2 py-1", condition && "bg-blue-500", { "text-white": isActive })
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Creates a type-safe variant function for component styling
 * Useful for creating consistent component APIs with multiple variants
 *
 * @param base - Base classes that are always applied
 * @param variants - Object containing variant definitions
 * @returns Function that accepts variant props and returns class string
 */
export function createVariants<
  T extends Record<string, Record<string, string>>,
>(base: string, variants: T) {
  return function getVariantClasses(props: {
    [K in keyof T]?: keyof T[K];
  }): string {
    const variantClasses = Object.entries(props)
      .map(([key, value]) => {
        const variantGroup = variants[key as keyof T];
        return variantGroup?.[value as string] || "";
      })
      .filter(Boolean);

    return cn(base, ...variantClasses);
  };
}

/**
 * Utility to safely access nested object properties
 * Prevents runtime errors when accessing undefined properties
 *
 * @param obj - Object to access
 * @param path - Dot-separated path to the property
 * @param defaultValue - Value to return if path doesn't exist
 * @returns The value at the path or the default value
 */
export function get<T>(
  obj: Record<string, unknown>,
  path: string,
  defaultValue?: T
): T | undefined {
  const keys = path.split(".");
  let result: unknown = obj;

  for (const key of keys) {
    if (typeof result !== "object" || result === null || !(key in result)) {
      return defaultValue;
    }
    result = (result as Record<string, unknown>)[key];
  }

  return result as T;
}

/**
 * Formats a string by capitalizing the first letter
 * Useful for display names and titles
 *
 * @param str - String to capitalize
 * @returns Capitalized string
 *
 * @example
 * capitalize("hello world") // "Hello world"
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Formats a string to title case (capitalizes each word)
 * Useful for headings and proper names
 *
 * @param str - String to convert to title case
 * @returns Title case string
 *
 * @example
 * titleCase("hello world") // "Hello World"
 */
export function titleCase(str: string): string {
  if (!str) return str;
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * Truncates a string to a specified length and adds ellipsis
 * Useful for displaying long text in limited space
 *
 * @param str - String to truncate
 * @param length - Maximum length before truncation
 * @param suffix - Suffix to add when truncated (default: "...")
 * @returns Truncated string
 *
 * @example
 * truncate("This is a long string", 10) // "This is a..."
 */
export function truncate(str: string, length: number, suffix = "..."): string {
  if (!str || str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}

/**
 * Debounces a function call, useful for search inputs and API calls
 * Prevents excessive function calls during rapid user input
 *
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 *
 * @example
 * const debouncedSearch = debounce((query) => search(query), 300);
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Formats a number as a currency string
 * Useful for displaying prices and monetary values
 *
 * @param amount - Number to format
 * @param currency - Currency code (default: "USD")
 * @param locale - Locale for formatting (default: "en-US")
 * @returns Formatted currency string
 *
 * @example
 * formatCurrency(1234.56) // "$1,234.56"
 */
export function formatCurrency(
  amount: number,
  currency = "USD",
  locale = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Formats a date to a readable string
 * Useful for displaying dates in a consistent format
 *
 * @param date - Date to format
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 *
 * @example
 * formatDate(new Date()) // "January 1, 2024"
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  const dateObj =
    typeof date === "string" || typeof date === "number"
      ? new Date(date)
      : date;

  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
}

/**
 * Generates a random ID string
 * Useful for creating unique keys and identifiers
 *
 * @param length - Length of the generated ID (default: 8)
 * @returns Random ID string
 *
 * @example
 * generateId() // "a1b2c3d4"
 */
export function generateId(length = 8): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

/**
 * Throttles a function call, useful for scroll and resize events
 * Limits function execution to once per specified time period
 *
 * @param func - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 *
 * @example
 * const throttledScroll = throttle(() => handleScroll(), 100);
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

/**
 * Creates a slug from a string (URL-friendly)
 * Useful for creating URL paths from titles
 *
 * @param str - String to convert to slug
 * @returns URL-friendly slug string
 *
 * @example
 * createSlug("Hello World!") // "hello-world"
 */
export function createSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Validates an email address
 * Uses a comprehensive regex pattern for email validation
 *
 * @param email - Email address to validate
 * @returns True if email is valid, false otherwise
 *
 * @example
 * isValidEmail("user@example.com") // true
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a URL
 * Checks if a string is a valid URL
 *
 * @param url - URL string to validate
 * @returns True if URL is valid, false otherwise
 *
 * @example
 * isValidUrl("https://example.com") // true
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Formats a number with thousand separators
 * Useful for displaying large numbers
 *
 * @param num - Number to format
 * @param locale - Locale for formatting (default: "en-US")
 * @returns Formatted number string
 *
 * @example
 * formatNumber(1234567) // "1,234,567"
 */
export function formatNumber(num: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * Calculates the relative time from a date
 * Returns human-readable relative time strings
 *
 * @param date - Date to calculate relative time from
 * @param locale - Locale for formatting (default: "en-US")
 * @returns Relative time string
 *
 * @example
 * getRelativeTime(new Date(Date.now() - 60000)) // "1 minute ago"
 */
export function getRelativeTime(
  date: Date | string | number,
  locale = "en-US"
): string {
  const dateObj =
    typeof date === "string" || typeof date === "number"
      ? new Date(date)
      : date;

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const diff = dateObj.getTime() - Date.now();
  const absDiff = Math.abs(diff);

  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (absDiff < minute) {
    return rtf.format(Math.round(diff / 1000), "second");
  } else if (absDiff < hour) {
    return rtf.format(Math.round(diff / minute), "minute");
  } else if (absDiff < day) {
    return rtf.format(Math.round(diff / hour), "hour");
  } else if (absDiff < week) {
    return rtf.format(Math.round(diff / day), "day");
  } else if (absDiff < month) {
    return rtf.format(Math.round(diff / week), "week");
  } else if (absDiff < year) {
    return rtf.format(Math.round(diff / month), "month");
  } else {
    return rtf.format(Math.round(diff / year), "year");
  }
}

/**
 * Deep clones an object or array
 * Creates a deep copy of the input, handling nested objects and arrays
 *
 * @param obj - Object or array to clone
 * @returns Deep cloned copy
 *
 * @example
 * const cloned = deepClone({ a: { b: 1 } });
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item)) as T;
  }

  if (typeof obj === "object") {
    const cloned = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }

  return obj;
}

/**
 * Checks if two values are deeply equal
 * Performs deep comparison of objects, arrays, and primitive values
 *
 * @param a - First value to compare
 * @param b - Second value to compare
 * @returns True if values are deeply equal, false otherwise
 *
 * @example
 * isEqual({ a: 1 }, { a: 1 }) // true
 */
export function isEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
    return a === b;
  }

  if (a === null || a === undefined || b === null || b === undefined) {
    return false;
  }

  if (a.constructor !== b.constructor) return false;

  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i])) return false;
    }
    return true;
  }

  if (a instanceof Array || b instanceof Array) return false;

  const aObj = a as Record<string, unknown>;
  const bObj = b as Record<string, unknown>;

  const keys = Object.keys(aObj);
  if (keys.length !== Object.keys(bObj).length) {
    return false;
  }

  return keys.every((key) => isEqual(aObj[key], bObj[key]));
}

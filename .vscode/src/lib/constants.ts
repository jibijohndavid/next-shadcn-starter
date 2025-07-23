/**
 * Application Constants
 *
 * This file contains all the constant values used throughout the application.
 * Centralizing constants makes them easier to maintain and update.
 */

// Application Information
export const APP_NAME = "Next.js Starter Template";
export const APP_DESCRIPTION =
  "A modern, fully-configured Next.js starter template with Tailwind CSS v4, shadcn/ui components, TypeScript, and dark mode support.";
export const APP_VERSION = "1.0.0";
export const APP_AUTHOR = "Next.js Starter Template";

// URLs and Links
export const GITHUB_URL = "https://github.com";
export const NEXTJS_DOCS_URL = "https://nextjs.org/docs";
export const TAILWIND_DOCS_URL = "https://tailwindcss.com/docs";
export const SHADCN_DOCS_URL = "https://ui.shadcn.com";

// Social Media and SEO
export const SITE_URL = "https://nextjs-starter-template.vercel.app";
export const OG_IMAGE_URL = "/og-image.png";
export const TWITTER_HANDLE = "@nextjs";

// Component Sizes
export const COMPONENT_SIZES = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

// Component Variants
export const COMPONENT_VARIANTS = {
  default: "default",
  destructive: "destructive",
  outline: "outline",
  secondary: "secondary",
  ghost: "ghost",
  link: "link",
} as const;

// Theme Options
export const THEME_OPTIONS = {
  light: "light",
  dark: "dark",
  system: "system",
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// Z-Index Layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070,
} as const;

// Form Validation
export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  url: /^https?:\/\/.+/,
  strongPassword:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
} as const;

// API Configuration
export const API_CONFIG = {
  timeout: 10000, // 10 seconds
  retries: 3,
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: "theme",
  user: "user",
  preferences: "preferences",
  cart: "cart",
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  required: "This field is required",
  invalidEmail: "Please enter a valid email address",
  invalidUrl: "Please enter a valid URL",
  passwordTooWeak:
    "Password must be at least 8 characters with uppercase, lowercase, number, and special character",
  networkError: "Network error. Please check your connection and try again.",
  serverError: "Server error. Please try again later.",
  notFound: "The requested resource was not found.",
  unauthorized: "You are not authorized to perform this action.",
  forbidden: "Access to this resource is forbidden.",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  saved: "Changes saved successfully",
  created: "Item created successfully",
  updated: "Item updated successfully",
  deleted: "Item deleted successfully",
  sent: "Message sent successfully",
  copied: "Copied to clipboard",
} as const;

// File Upload
export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
  allowedExtensions: [".jpg", ".jpeg", ".png", ".gif", ".webp"],
} as const;

// Pagination
export const PAGINATION = {
  defaultPageSize: 10,
  pageSizeOptions: [5, 10, 20, 50, 100],
  maxPageSize: 100,
} as const;

// Date Formats
export const DATE_FORMATS = {
  short: "MMM d, yyyy",
  medium: "MMM d, yyyy h:mm a",
  long: "MMMM d, yyyy h:mm:ss a",
  iso: "yyyy-MM-dd",
  time: "h:mm a",
} as const;

// Currency Codes
export const CURRENCY_CODES = {
  USD: "USD",
  EUR: "EUR",
  GBP: "GBP",
  JPY: "JPY",
  CAD: "CAD",
  AUD: "AUD",
} as const;

// Language Codes
export const LANGUAGE_CODES = {
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
  it: "it",
  pt: "pt",
  ja: "ja",
  ko: "ko",
  zh: "zh",
} as const;

// Feature Flags (for development)
export const FEATURE_FLAGS = {
  enableAnalytics: process.env.NODE_ENV === "production",
  enableDebugMode: process.env.NODE_ENV === "development",
  enableExperimentalFeatures: false,
} as const;

// Component Default Props
export const DEFAULT_PROPS = {
  button: {
    variant: COMPONENT_VARIANTS.default,
    size: COMPONENT_SIZES.md,
  },
  card: {
    variant: COMPONENT_VARIANTS.default,
  },
  input: {
    size: COMPONENT_SIZES.md,
  },
} as const;

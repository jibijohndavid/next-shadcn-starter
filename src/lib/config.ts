/**
 * Application Configuration
 *
 * This file contains configuration objects and settings for the application.
 * These configurations can be environment-specific and are used throughout the app.
 */
import { type Metadata } from "next";

import {
  APP_AUTHOR,
  APP_DESCRIPTION,
  APP_NAME,
  OG_IMAGE_URL,
  SITE_URL,
} from "./constants";

// Site Configuration
export const siteConfig = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: SITE_URL,
  ogImage: OG_IMAGE_URL,
  author: APP_AUTHOR,
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Dark Mode",
    "Starter Template",
    "Web Development",
  ] as string[],
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    docs: "https://nextjs.org/docs",
  },
} as const;

// Default Metadata Configuration
export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Theme Configuration
export const themeConfig = {
  attribute: "class" as const,
  defaultTheme: "system" as const,
  enableSystem: true,
  disableTransitionOnChange: false,
  themes: ["light", "dark", "system"] as const,
} as const;

// Navigation Configuration
export const navigationConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "Configuration",
          href: "/docs/configuration",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          href: "/docs/components/button",
        },
        {
          title: "Card",
          href: "/docs/components/card",
        },
        {
          title: "Input",
          href: "/docs/components/input",
        },
      ],
    },
  ],
} as const;

// Form Configuration
export const formConfig = {
  validation: {
    debounceMs: 300,
    showErrorsOnBlur: true,
    showErrorsOnChange: false,
    validateOnMount: false,
  },
  defaults: {
    required: false,
    disabled: false,
    placeholder: "",
  },
} as const;

// Animation Configuration
export const animationConfig = {
  transitions: {
    default: "all 0.2s ease-in-out",
    fast: "all 0.15s ease-in-out",
    slow: "all 0.3s ease-in-out",
  },
  easing: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  },
  durations: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
} as const;

// Layout Configuration
export const layoutConfig = {
  header: {
    height: 64,
    sticky: true,
    blur: true,
  },
  sidebar: {
    width: 256,
    collapsedWidth: 64,
    collapsible: true,
  },
  footer: {
    height: 80,
    sticky: false,
  },
  container: {
    maxWidth: "1200px",
    padding: "1rem",
  },
} as const;

// Component Variant Configurations
export const buttonVariantConfig = {
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "underline-offset-4 hover:underline text-primary",
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
} as const;

// Toast Configuration
export const toastConfig = {
  duration: 4000,
  position: "bottom-right" as const,
  maxToasts: 5,
  variants: {
    default: "bg-background text-foreground border",
    destructive:
      "bg-destructive text-destructive-foreground border-destructive",
    success: "bg-green-500 text-white border-green-500",
    warning: "bg-yellow-500 text-white border-yellow-500",
    info: "bg-blue-500 text-white border-blue-500",
  },
} as const;

// Development Configuration
export const devConfig = {
  enableDevTools: process.env.NODE_ENV === "development",
  enableDebugLogs: process.env.NODE_ENV === "development",
  enableHotReload: process.env.NODE_ENV === "development",
  showComponentBoundaries: false,
} as const;

// Performance Configuration
export const performanceConfig = {
  lazyLoading: {
    enabled: true,
    threshold: 0.1,
    rootMargin: "50px",
  },
  imageOptimization: {
    enabled: true,
    quality: 85,
    formats: ["webp", "avif"],
  },
  caching: {
    staticAssets: "1y",
    apiResponses: "5m",
    pages: "1h",
  },
} as const;

// Accessibility Configuration
export const a11yConfig = {
  focusVisible: true,
  reducedMotion: "respect-user-preference" as const,
  highContrast: false,
  screenReader: {
    announcements: true,
    liveRegions: true,
  },
  keyboard: {
    navigation: true,
    shortcuts: true,
  },
} as const;

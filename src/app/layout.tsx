import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Starter Template",
    template: "%s | Next.js Starter Template",
  },
  description:
    "A modern, fully-configured Next.js starter template with Tailwind CSS v4, shadcn/ui components, TypeScript, and dark mode support. Perfect for building modern web applications.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Dark Mode",
    "Starter Template",
    "Web Development",
  ],
  authors: [
    {
      name: "Next.js Starter Template",
    },
  ],
  creator: "Next.js Starter Template",
  publisher: "Next.js Starter Template",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nextjs-starter-template.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextjs-starter-template.vercel.app",
    title: "Next.js Starter Template",
    description:
      "A modern, fully-configured Next.js starter template with Tailwind CSS v4, shadcn/ui components, TypeScript, and dark mode support.",
    siteName: "Next.js Starter Template",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next.js Starter Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Starter Template",
    description:
      "A modern, fully-configured Next.js starter template with Tailwind CSS v4, shadcn/ui components, TypeScript, and dark mode support.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

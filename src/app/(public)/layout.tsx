import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="container mx-auto flex-1 px-4 py-6 sm:py-8 lg:py-12">
        {children}
      </main>
      <footer className="bg-muted/30 mt-auto border-t">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Next.js Starter</h3>
              <p className="text-muted-foreground text-sm">
                A modern web application built with Next.js, Tailwind CSS, and
                shadcn/ui components.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground flex min-h-[44px] items-center transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground flex min-h-[44px] items-center transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground flex min-h-[44px] items-center transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/components"
                  className="text-muted-foreground hover:text-foreground flex min-h-[44px] items-center transition-colors"
                >
                  Components
                </Link>
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase">
                Resources
              </h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex min-h-[44px] items-center transition-colors"
                >
                  Next.js Docs
                </a>
                <a
                  href="https://tailwindcss.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex min-h-[44px] items-center transition-colors"
                >
                  Tailwind CSS
                </a>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex min-h-[44px] items-center transition-colors"
                >
                  shadcn/ui
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Next.js Starter. Built with Next.js, Tailwind CSS, and
                shadcn/ui.
              </p>
              <div className="flex space-x-4 text-sm">
                <button className="text-muted-foreground hover:text-foreground flex min-h-[44px] items-center transition-colors">
                  Privacy Policy
                </button>
                <button className="text-muted-foreground hover:text-foreground flex min-h-[44px] items-center transition-colors">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

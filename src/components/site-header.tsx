"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-xl font-bold sm:text-2xl">Next.js Starter</h1>
          </Link>
          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/about"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/contact"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Contact
            </Link>
            <Link
              href="/components"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/components"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Components
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden sm:inline-flex"
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 md:hidden" // 44px minimum touch target
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="bg-background/95 border-t backdrop-blur md:hidden">
          <nav className="container mx-auto space-y-2 px-4 py-4">
            <Link
              href="/"
              className={cn(
                "flex min-h-[44px] items-center rounded-md px-3 py-3 text-sm font-medium transition-colors", // 44px minimum touch target
                pathname === "/"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "flex min-h-[44px] items-center rounded-md px-3 py-3 text-sm font-medium transition-colors", // 44px minimum touch target
                pathname === "/about"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "flex min-h-[44px] items-center rounded-md px-3 py-3 text-sm font-medium transition-colors", // 44px minimum touch target
                pathname === "/contact"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/components"
              className={cn(
                "flex min-h-[44px] items-center rounded-md px-3 py-3 text-sm font-medium transition-colors", // 44px minimum touch target
                pathname === "/components"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Components
            </Link>
            <div className="border-t pt-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="min-h-[44px] w-full justify-start" // 44px minimum touch target
              >
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GitHub
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

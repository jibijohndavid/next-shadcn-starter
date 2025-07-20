import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="from-background via-background to-muted/20 relative overflow-hidden bg-gradient-to-br py-12 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-muted mb-8 inline-flex items-center rounded-full border px-3 py-1 text-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
              Ready to use • TypeScript • Dark Mode
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Next.js Starter
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Template
              </span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
              A modern, fully-configured starter template with Next.js 15,
              Tailwind CSS v4, shadcn/ui components, TypeScript, and dark mode
              support. Perfect for building modern web applications.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-base">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-base" asChild>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything You Need
              </h2>
              <p className="text-muted-foreground text-lg">
                Pre-configured with the best tools and practices for modern web
                development
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 h-12 w-12 rounded-lg bg-blue-500/10 p-3">
                    <div className="h-full w-full rounded bg-blue-500"></div>
                  </div>
                  <CardTitle>Next.js 15</CardTitle>
                  <CardDescription>
                    Latest Next.js with App Router, Server Components, and
                    optimized performance
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 h-12 w-12 rounded-lg bg-cyan-500/10 p-3">
                    <div className="h-full w-full rounded bg-cyan-500"></div>
                  </div>
                  <CardTitle>Tailwind CSS v4</CardTitle>
                  <CardDescription>
                    Modern utility-first CSS framework with automatic class
                    sorting and optimization
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 h-12 w-12 rounded-lg bg-purple-500/10 p-3">
                    <div className="h-full w-full rounded bg-purple-500"></div>
                  </div>
                  <CardTitle>shadcn/ui</CardTitle>
                  <CardDescription>
                    Beautiful, accessible components built with Radix UI and
                    styled with Tailwind CSS
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 h-12 w-12 rounded-lg bg-green-500/10 p-3">
                    <div className="h-full w-full rounded bg-green-500"></div>
                  </div>
                  <CardTitle>TypeScript</CardTitle>
                  <CardDescription>
                    Full TypeScript support with strict type checking and
                    optimal developer experience
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 h-12 w-12 rounded-lg bg-orange-500/10 p-3">
                    <div className="h-full w-full rounded bg-orange-500"></div>
                  </div>
                  <CardTitle>Dark Mode</CardTitle>
                  <CardDescription>
                    Built-in dark mode support with system preference detection
                    and smooth transitions
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 h-12 w-12 rounded-lg bg-red-500/10 p-3">
                    <div className="h-full w-full rounded bg-red-500"></div>
                  </div>
                  <CardTitle>Developer Tools</CardTitle>
                  <CardDescription>
                    ESLint, Prettier, and automatic import sorting for
                    consistent code quality
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Components Preview Section */}
      <section className="bg-muted/30 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Beautiful Components
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our comprehensive collection of pre-built shadcn/ui
                components with interactive examples and customization options.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/components">View Components</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shadcn/ui Docs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Quick Start Guide
              </h2>
              <p className="text-muted-foreground text-lg">
                Get up and running in minutes with these simple steps
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                    1
                  </div>
                  <CardTitle>Clone & Install</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Clone the repository and install dependencies with PNPM
                  </p>
                  <code className="bg-muted block rounded p-2 text-xs">
                    git clone [repo-url]
                    <br />
                    pnpm install
                  </code>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                    2
                  </div>
                  <CardTitle>Start Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Start the development server with Turbopack
                  </p>
                  <code className="bg-muted block rounded p-2 text-xs">
                    pnpm dev
                  </code>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                    3
                  </div>
                  <CardTitle>Build & Deploy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Build for production and deploy anywhere
                  </p>
                  <code className="bg-muted block rounded p-2 text-xs">
                    pnpm build
                    <br />
                    pnpm start
                  </code>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card mt-12 rounded-lg border p-6 sm:p-8">
              <h3 className="mb-4 text-xl font-semibold">Available Scripts</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <code className="mb-2 block text-sm font-medium">
                    pnpm dev
                  </code>
                  <p className="text-muted-foreground text-sm">
                    Start development server with Turbopack
                  </p>
                </div>
                <div>
                  <code className="mb-2 block text-sm font-medium">
                    pnpm build
                  </code>
                  <p className="text-muted-foreground text-sm">
                    Build optimized production bundle
                  </p>
                </div>
                <div>
                  <code className="mb-2 block text-sm font-medium">
                    pnpm lint
                  </code>
                  <p className="text-muted-foreground text-sm">
                    Run ESLint for code quality checks
                  </p>
                </div>
                <div>
                  <code className="mb-2 block text-sm font-medium">
                    pnpm format
                  </code>
                  <p className="text-muted-foreground text-sm">
                    Format code with Prettier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-muted-foreground text-sm">
              Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
            <div className="flex space-x-4 text-sm">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Next.js Docs
              </a>
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Tailwind CSS
              </a>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                shadcn/ui
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

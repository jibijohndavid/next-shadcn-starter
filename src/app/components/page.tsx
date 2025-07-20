import Link from "next/link";

import { ComponentShowcase } from "@/components/component-showcase";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Components",
  description:
    "Explore all the pre-installed shadcn/ui components with interactive examples",
};

export default function ComponentsPage() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />

      {/* Components Page Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Page Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Component Showcase
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                Explore all the pre-installed shadcn/ui components with
                interactive examples. These components are built with Radix UI
                primitives and styled with Tailwind CSS.
              </p>
            </div>

            {/* Component Showcase */}
            <ComponentShowcase />

            {/* Additional Information */}
            <div className="mt-16 text-center">
              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  These components are just the beginning. Use them as building
                  blocks to create your own unique user interface.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" asChild>
                    <Link href="/">Back to Home</Link>
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
          </div>
        </div>
      </main>
    </div>
  );
}

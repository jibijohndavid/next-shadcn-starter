import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          About Us
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Learn more about our mission, values, and the technology that powers
          our platform
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We&apos;re dedicated to building modern, accessible, and
              performant web applications that provide exceptional user
              experiences. Our platform demonstrates best practices in web
              development using cutting-edge technologies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Built with industry-leading tools and frameworks:
            </p>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>• Next.js 14 with App Router</li>
              <li>• TypeScript for type safety</li>
              <li>• Tailwind CSS for styling</li>
              <li>• shadcn/ui component library</li>
              <li>• Responsive design principles</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We believe in creating software that is:
            </p>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>• Accessible to all users</li>
              <li>• Performance-optimized</li>
              <li>• Maintainable and scalable</li>
              <li>• User-centered in design</li>
              <li>• Built with modern standards</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Ready to explore what we&apos;ve built? Check out our components
              showcase or get in touch with us to learn more about our approach
              to modern web development.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="/components"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                View Components
              </a>
              <a
                href="/contact"
                className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

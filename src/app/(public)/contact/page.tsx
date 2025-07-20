import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Get in touch with our team. We&apos;d love to hear from you and answer
          any questions you might have.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-1 font-medium">Email</h4>
                <p className="text-muted-foreground text-sm">
                  hello@example.com
                </p>
              </div>
              <div>
                <h4 className="mb-1 font-medium">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  We typically respond within 24 hours
                </p>
              </div>
              <div>
                <h4 className="mb-1 font-medium">Support</h4>
                <p className="text-muted-foreground text-sm">
                  Available Monday - Friday, 9AM - 5PM EST
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Other Ways to Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center space-x-2 text-sm transition-colors"
              >
                <span>GitHub</span>
              </a>
              <a
                href="/components"
                className="text-muted-foreground hover:text-foreground flex items-center space-x-2 text-sm transition-colors"
              >
                <span>View Components</span>
              </a>
              <a
                href="/about"
                className="text-muted-foreground hover:text-foreground flex items-center space-x-2 text-sm transition-colors"
              >
                <span>Learn About Us</span>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[120px] w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button className="w-full sm:w-auto">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

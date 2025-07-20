"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void | Promise<void>;
  isLoading?: boolean;
  className?: string;
  title?: string;
  description?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm({
  onSubmit,
  isLoading = false,
  className,
  title = "Contact Us",
  description = "Send us a message and we'll get back to you as soon as possible.",
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /**
   * Validates form data and returns any errors
   */
  const validateForm = (data: ContactFormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (data.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  /**
   * Handles form submission with validation
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      await onSubmit?.(formData);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handles input changes and clears related errors
   */
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const isFormDisabled = isLoading || isSubmitting;

  return (
    <Card className={cn("w-full max-w-2xl", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {submitSuccess && (
            <div className="rounded-md border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
              <p className="text-sm text-green-800 dark:text-green-200">
                Thank you for your message! We&apos;ll get back to you soon.
              </p>
            </div>
          )}

          {/* Name and Email Row */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="contact-name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                disabled={isFormDisabled}
                className={cn(errors.name && "border-red-500")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                disabled={isFormDisabled}
                className={cn(errors.email && "border-red-500")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="contact-subject">
              Subject <span className="text-red-500">*</span>
            </Label>
            <Input
              id="contact-subject"
              type="text"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              disabled={isFormDisabled}
              className={cn(errors.subject && "border-red-500")}
            />
            {errors.subject && (
              <p className="text-sm text-red-500">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="contact-message">
              Message <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="contact-message"
              placeholder="Tell us more about your inquiry..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              disabled={isFormDisabled}
              rows={5}
              className={cn(
                "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                errors.message && "border-red-500"
              )}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <p className="text-muted-foreground text-sm">
            <span className="text-red-500">*</span> Required fields
          </p>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFormData({ name: "", email: "", subject: "", message: "" });
                setErrors({});
                setSubmitSuccess(false);
              }}
              disabled={isFormDisabled}
            >
              Clear
            </Button>
            <Button
              type="submit"
              disabled={isFormDisabled}
              className="min-w-[100px]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

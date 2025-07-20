/**
 * Example Components
 *
 * This directory contains example components that demonstrate best practices
 * for building applications with the Next.js starter template.
 *
 * Each example component shows:
 * - Proper component composition patterns
 * - TypeScript usage with shadcn/ui components
 * - State management and form handling
 * - Accessibility considerations
 * - Responsive design with Tailwind CSS
 * - Error handling and loading states
 *
 * Usage:
 * ```tsx
 * import { UserProfileCard, ContactForm } from "@/components/examples";
 *
 * export default function Page() {
 *   return (
 *     <div className="space-y-8">
 *       <UserProfileCard user={userData} />
 *       <ContactForm onSubmit={handleSubmit} />
 *     </div>
 *   );
 * }
 * ```
 */

export { UserProfileCard } from "./user-profile-card";
export { ContactForm } from "./contact-form";

// Re-export types for convenience
export type { User } from "./user-profile-card";
export type { ContactFormData } from "./contact-form";

import { z } from "zod";

// Login schema for form validation
export const loginSchema = z.object({
  email: z.email().min(1, "Email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

// Sign up schema (for future use)
export const signUpSchema = z
  .object({
    email: z.email().min(1, "Email is required"),
    password: z.string().min(5, "Password is required"),
    // .min(8, "Password must be at least 8 characters long"),
    // .regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    //   "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    // )
    confirmPassword: z.string().min(1, "Please confirm your password"),
    name: z
      .string()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;

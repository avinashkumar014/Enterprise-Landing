import { z } from "zod";

/** Shared client + server validation contract for the lead capture form. */
export const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(80, { message: "Name must be under 80 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid work email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{7,18}$/, { message: "Enter a valid phone number" }),
  company: z
    .string()
    .trim()
    .min(2, { message: "Company name is required" })
    .max(120, { message: "Company name must be under 120 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Tell us a little more (min. 10 characters)" })
    .max(1000, { message: "Message must be under 1000 characters" }),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
import { z } from "zod";

export const bookingFormSchema = z.object({
  serviceType: z.string().min(1, "Please select a service"),
  frequency: z.string().min(1, "Please select a frequency"),
  rooms: z.number().min(1).max(10),
  bathrooms: z.number().min(1).max(5),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full address"),
  instructions: z.string().optional(),
  estimatedPrice: z.number().min(0),
});

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please enter at least 10 characters"),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;

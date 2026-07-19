import { z } from "zod";

export const customerSchema = z.object({
  fullName: z
    .string()
    .min(2, "Customer name is required"),

  phone: z.string().optional(),

  email: z
    .string()
    .email("Invalid email")
    .or(z.literal("")),

  address: z.string().optional(),

  company: z.string().optional(),

  customerType: z.string(),

  taxNumber: z.string().optional(),

  notes: z.string().optional(),
});
import { z } from "zod";

export const supplierSchema = z.object({
  companyName: z
    .string()
    .min(2, "Company name is required"),

  contactPerson: z
    .string()
    .optional(),

  phone: z
    .string()
    .optional(),

  email: z
    .string()
    .email("Invalid email")
    .or(z.literal("")),

  address: z
    .string()
    .optional(),

  notes: z
    .string()
    .optional(),
});
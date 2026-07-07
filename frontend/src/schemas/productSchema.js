import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters"),

  sku: z
    .string()
    .min(2, "SKU is required"),

  barcode: z.string().optional(),

  category: z
    .string()
    .min(1, "Please select a category"),

  supplier: z
    .string()
    .min(1, "Please select a supplier"),

  purchasePrice: z.coerce
    .number()
    .positive("Purchase price must be greater than 0"),

  sellingPrice: z.coerce
    .number()
    .positive("Selling price must be greater than 0"),

  quantity: z.coerce
    .number()
    .min(0, "Quantity cannot be negative"),

  minimumStock: z.coerce
    .number()
    .min(0, "Minimum stock cannot be negative"),

  description: z.string().optional(),
});
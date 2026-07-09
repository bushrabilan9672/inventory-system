import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters"),

  sku: z
    .string()
    .min(2, "SKU is required"),

  barcode: z.string().optional(),

  category: z.string().optional(),

  supplier: z.string().optional(),

  quantity: z.coerce.number().optional(),

  minimumStock: z.coerce.number().optional(),

  purchasePrice: z.coerce.number(),

  sellingPrice: z.coerce.number(),

  description: z.string().optional(),
});
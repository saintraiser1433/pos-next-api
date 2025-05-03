import { z } from "zod";

export const productCategorySchema = z.object({
  name: z.string({
    required_error: "Category name is required",
  }).min(1, "Category name cannot be empty"),
  status: z.boolean().optional(),
}).strict();

export const productBrandSchema = z.object({
  name: z.string({
    required_error: "Brand name is required",
  }).min(1, "Brand name cannot be empty"),
  status: z.boolean().optional(),
}).strict();

export const productVariants = z.object({
  name: z.string().min(1, "Variations cannot be empty"),
  type: z.string().min(1, "Variations Type cannot be empty"),
  status: z.boolean().optional(),
}).strict();

export const productUnit = z.object({
  name: z.string().min(1, "Unit Name cannot be empty"),
  shortName: z.string().min(1, "Short Name cannot be empty"),
  baseUnit: z.string().min(1, "Base Unit cannot be empty"),
  status: z.boolean().optional(),
}).strict();

export const productBaseUnit = z.object({
  name: z.string().min(1, "Base Unit Name cannot be empty"),
}).strict();


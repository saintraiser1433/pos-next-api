import { z } from "zod";

export const productCategorySchema = z.object({
  name: z.string({
    required_error: "Category name is required",
  }).min(1, "Category name cannot be empty"),
  status: z.boolean().optional(),
}).strict();

export const productBrandSchema = z.object({
  brandImage: z
    .union([
      z.instanceof(File).refine((file) => file.size !== 0, {
        message: 'Please upload a non-empty image',
      }),
      z.undefined(),
      z.null(),
    ])
    .optional(),
  name: z.string({
    required_error: "Brand name is required",
  }).min(1, "Brand name cannot be empty"),
  description: z.string().min(1, "Brand Description cannot be empty"),
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
  baseUnitId: z.number({
    required_error : 'Base Unit is required'
  }),
  operator: z.string().min(1, "Base Unit cannot be empty"),
  operationValue: z.number().min(1, "Operator value cannot be empty"),
  status: z.boolean().optional(),
}).strict();

export const productBaseUnit = z.object({
  name: z.string().min(1, "Base Unit Name cannot be empty"),
}).strict();


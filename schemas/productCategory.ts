import { z } from "zod";

export const productCategorySchema = z.object({
    name: z.string({
      required_error: "Category name is required", 
      invalid_type_error: "Category name must be a string"
    }).min(1, "Category name cannot be empty"),
    status: z.boolean().optional(),
  }).strict();

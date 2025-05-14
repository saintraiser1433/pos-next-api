import { z } from "zod";

//category
export const productCategorySchema = z.object({
  name: z.string({
    required_error: "Category name is required",
  }).min(1, "Category name cannot be empty"),
  status: z.boolean().optional(),
}).strict();

//brand
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

//variants
export const productVariants = z.object({
  name: z.string().min(1, "Variations cannot be empty"),
  type: z.string().min(1, "Variations Type cannot be empty"),
  status: z.boolean().optional(),
}).strict();

//units
export const productUnit = z.object({
  name: z.string().min(1, "Unit Name cannot be empty"),
  shortName: z.string().min(1, "Short Name cannot be empty"),
  baseUnitId: z.number({
    required_error: 'Base Unit is required'
  }),
  operator: z.string().min(1, "Base Unit cannot be empty"),
  operationValue: z.number().min(1, "Operator value cannot be empty"),
  status: z.boolean().optional(),
}).strict();

//baseunit
export const productBaseUnit = z.object({
  name: z.string().min(1, "Base Unit Name cannot be empty"),
}).strict();


//product
export const productValidation = z.object({
  productImage: z
      .union([
          z.instanceof(File).refine((file) => file.size !== 0, {
              message: 'Please upload a valid image',
          }),
          z.string().min(1, { message: 'Image must not be empty' }),
      ])
      .optional(),
  categoryId: z.number({
      required_error: 'Product Category is Required',
  }),
  productName: z.string().min(2, {
      message: 'Product name must be at least 2 characters.',
  }),
  barcode: z.string({
      required_error: 'SKU Barcode is Required',
  }),
  barcodeSymbology: z.enum(['CODE128', 'CODE39'], {
      required_error: 'Barcode Symbology is Required',
  }),
  brandId: z.number({
      required_error: 'Brand is Required',
  }),
  orderTax: z.number().min(0).max(100),
  taxType: z.enum(['EXCLUSIVE', 'INCLUSIVE'], {
      required_error: 'Product Type is Required',
  }),
  description: z.string().min(2, {
      message: 'Description must be at least 5 characters.',
  }),
  productType: z.enum(['STANDARD', 'VARIABLE'], {
      required_error: 'Product Type is Required',
  }),
  productCost: z.number({
      required_error: 'Product Cost is Required',
      invalid_type_error: 'Product Cost is Required',
  }),
  productPrice: z.number({
      required_error: 'Product Price is Required',
      invalid_type_error: 'Product Price is Required',
  }),
  productUnit: z.number({
      required_error: 'Product Unit is Required',
      invalid_type_error: 'Product Unit is Required',
  }),
  saleUnit: z.number({
      required_error: 'Sale Unit is Required',
      invalid_type_error: 'Sale Unit is Required',
  }),
  purchaseUnit: z.number({
      required_error: 'Purchase Unit is Required',
      invalid_type_error: 'Purchase Unit is Required',
  }),
  stockAlert: z.number({
      required_error: 'Stock Alert is Required',
      invalid_type_error: 'Stock Alert is Required',
  }),
  warrantyPeriod: z.number({
      required_error: 'Warranty Period is Required',
      invalid_type_error: 'Warranty Period is Required',
  }),
  paymentType: z.enum(['Days', 'Years', 'Month'], {
      required_error: 'Payment Type is Required',
  }),
  warrantyTerms: z.string().min(5, {
      message: 'Warranty Terms must be at least 5 characters.',
  }),
  openingStock: z.number().optional(),
  isGuarantee: z.boolean().default(false).optional(),
});




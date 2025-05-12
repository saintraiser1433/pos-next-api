-- CreateEnum
CREATE TYPE "BarcodeType" AS ENUM ('CODE128', 'CODE39');

-- CreateEnum
CREATE TYPE "TaxType" AS ENUM ('EXCLUSIVE', 'INCLUSIVE');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('STANDARD', 'VARIABLE');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('MONTH', 'DAYS', 'YEARS');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "barcodeType" "BarcodeType" NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "brandId" INTEGER NOT NULL,
    "orderTax" INTEGER DEFAULT 0,
    "taxType" "TaxType" NOT NULL,
    "productImage" TEXT,
    "productType" "ProductType" NOT NULL,
    "productCost" DECIMAL(10,2) NOT NULL,
    "productPrice" DECIMAL(10,2) NOT NULL,
    "productUnitId" INTEGER NOT NULL,
    "saleUnitId" INTEGER NOT NULL,
    "purchaseUnitId" INTEGER NOT NULL,
    "stockAlert" INTEGER DEFAULT 0,
    "warrantyPeriod" INTEGER DEFAULT 0,
    "warrantyPaymentType" "PaymentType" NOT NULL,
    "warrantyTerms" TEXT,
    "isGuaranteed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_barcode_key" ON "Product"("barcode");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productUnitId_fkey" FOREIGN KEY ("productUnitId") REFERENCES "BaseUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_saleUnitId_fkey" FOREIGN KEY ("saleUnitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_purchaseUnitId_fkey" FOREIGN KEY ("purchaseUnitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Made the column `status` on table `ProductCategory` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ProductCategory" ALTER COLUMN "status" SET NOT NULL;

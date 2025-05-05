/*
  Warnings:

  - Added the required column `brandImage` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "brandImage" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;

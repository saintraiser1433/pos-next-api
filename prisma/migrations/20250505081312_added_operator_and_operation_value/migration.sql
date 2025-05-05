/*
  Warnings:

  - Added the required column `operationValue` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `operator` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "operationValue" INTEGER NOT NULL,
ADD COLUMN     "operator" VARCHAR(100) NOT NULL;

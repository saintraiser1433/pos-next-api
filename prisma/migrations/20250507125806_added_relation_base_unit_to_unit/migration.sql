/*
  Warnings:

  - You are about to drop the column `baseUnit` on the `Unit` table. All the data in the column will be lost.
  - Added the required column `baseUnitId` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "baseUnit",
ADD COLUMN     "baseUnitId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_baseUnitId_fkey" FOREIGN KEY ("baseUnitId") REFERENCES "BaseUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

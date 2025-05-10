/*
  Warnings:

  - Added the required column `surah_number` to the `surahs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "surahs" ADD COLUMN     "surah_number" INTEGER NOT NULL;

/*
  Warnings:

  - Made the column `isRepeat` on table `memorizing_logs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "memorizing_logs" ALTER COLUMN "isRepeat" SET NOT NULL;

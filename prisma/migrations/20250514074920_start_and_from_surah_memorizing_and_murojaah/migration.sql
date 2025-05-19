/*
  Warnings:

  - You are about to drop the column `surah` on the `memorizing_logs` table. All the data in the column will be lost.
  - You are about to drop the column `surah` on the `murojaah_logs` table. All the data in the column will be lost.
  - Added the required column `from_surah` to the `memorizing_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to_surah` to the `memorizing_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from_surah` to the `murojaah_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to_surah` to the `murojaah_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "memorizing_logs" DROP COLUMN "surah",
ADD COLUMN     "from_surah" VARCHAR NOT NULL,
ADD COLUMN     "to_surah" VARCHAR NOT NULL;

-- AlterTable
ALTER TABLE "murojaah_logs" DROP COLUMN "surah",
ADD COLUMN     "from_surah" VARCHAR NOT NULL,
ADD COLUMN     "to_surah" VARCHAR NOT NULL;

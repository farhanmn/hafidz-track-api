/*
  Warnings:

  - You are about to drop the `memorizing_logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `murojaah_logs` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TahfidzType" AS ENUM ('MEMORIZING', 'MUROJAAH');

-- CreateEnum
CREATE TYPE "TahfidzClass" AS ENUM ('QURAN', 'IQRO');

-- DropForeignKey
ALTER TABLE "memorizing_logs" DROP CONSTRAINT "memorizing_logs_musyrif_id_fkey";

-- DropForeignKey
ALTER TABLE "memorizing_logs" DROP CONSTRAINT "memorizing_logs_student_id_fkey";

-- DropForeignKey
ALTER TABLE "murojaah_logs" DROP CONSTRAINT "murojaah_logs_musyrif_id_fkey";

-- DropForeignKey
ALTER TABLE "murojaah_logs" DROP CONSTRAINT "murojaah_logs_student_id_fkey";

-- DropTable
DROP TABLE "memorizing_logs";

-- DropTable
DROP TABLE "murojaah_logs";

-- CreateTable
CREATE TABLE "tahfidz_logs" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "musyrif_id" UUID NOT NULL,
    "class" "TahfidzClass" NOT NULL,
    "juz" INTEGER NOT NULL,
    "from_surah" VARCHAR,
    "from_ayah" INTEGER NOT NULL,
    "to_surah" VARCHAR,
    "to_ayah" INTEGER NOT NULL,
    "submission_date" DATE,
    "assessment" "Assessment" NOT NULL DEFAULT 'PASS',
    "notes" TEXT,
    "isRepeat" SMALLINT NOT NULL DEFAULT 0,
    "type" "TahfidzType" NOT NULL DEFAULT 'MEMORIZING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tahfidz_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tahfidz_logs" ADD CONSTRAINT "tahfidz_logs_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tahfidz_logs" ADD CONSTRAINT "tahfidz_logs_musyrif_id_fkey" FOREIGN KEY ("musyrif_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

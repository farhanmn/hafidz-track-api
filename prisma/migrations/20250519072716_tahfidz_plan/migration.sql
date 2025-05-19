/*
  Warnings:

  - You are about to drop the `memorizing_plans` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "memorizing_plans" DROP CONSTRAINT "memorizing_plans_assigned_by_fkey";

-- DropForeignKey
ALTER TABLE "memorizing_plans" DROP CONSTRAINT "memorizing_plans_student_id_fkey";

-- DropTable
DROP TABLE "memorizing_plans";

-- CreateTable
CREATE TABLE "tahfidz_plans" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "plan_type" "PlanType" NOT NULL DEFAULT 'SURAH',
    "juz_number" INTEGER,
    "surah_id" UUID,
    "page_number" INTEGER,
    "start_ayah" INTEGER NOT NULL,
    "end_ayah" INTEGER NOT NULL,
    "target_date" DATE NOT NULL,
    "assigned_by" UUID NOT NULL,
    "notes" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tahfidz_plans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tahfidz_plans" ADD CONSTRAINT "tahfidz_plans_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tahfidz_plans" ADD CONSTRAINT "tahfidz_plans_assigned_by_fkey" FOREIGN KEY ("assigned_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

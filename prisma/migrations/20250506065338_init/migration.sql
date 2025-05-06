-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MUSYRIF');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('L', 'P');

-- CreateEnum
CREATE TYPE "StudentStatus" AS ENUM ('ACTIVE', 'GRADUATION', 'NONACTIVE');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('PRESENT', 'ABSENT', 'LATE', 'EXCUSED');

-- CreateEnum
CREATE TYPE "ParentStatus" AS ENUM ('PARENTS', 'NEAR_FAMILY');

-- CreateEnum
CREATE TYPE "Assessment" AS ENUM ('PASS', 'FAIL');

-- CreateEnum
CREATE TYPE "Revelation" AS ENUM ('MECCAN', 'MEDINAN');

-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('JUZ', 'SURAH', 'PAGE');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'MUSYRIF',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" UUID NOT NULL,
    "musyrif_id" UUID NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'L',
    "birth_date" DATE NOT NULL,
    "join_date" DATE NOT NULL,
    "status" "StudentStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendances" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "AttendanceStatus" NOT NULL DEFAULT 'PRESENT',
    "remark" TEXT NOT NULL,
    "recorded_by" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parents" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'L',
    "phone" VARCHAR(20),
    "parent_status" "ParentStatus" NOT NULL DEFAULT 'PARENTS',
    "description" TEXT,
    "address" TEXT,

    CONSTRAINT "parents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memorizing_logs" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "musyrif_id" UUID NOT NULL,
    "juz" INTEGER NOT NULL,
    "surah" VARCHAR NOT NULL,
    "from_ayah" INTEGER NOT NULL,
    "to_ayah" INTEGER NOT NULL,
    "submission_date" DATE NOT NULL,
    "assessment" "Assessment" NOT NULL DEFAULT 'PASS',
    "notes" TEXT,
    "isRepeat" SMALLINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "memorizing_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "murojaah_logs" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "musyrif_id" UUID NOT NULL,
    "juz" INTEGER NOT NULL,
    "surah" VARCHAR NOT NULL,
    "from_ayah" INTEGER NOT NULL,
    "to_ayah" INTEGER NOT NULL,
    "submission_date" DATE NOT NULL,
    "assessment" "Assessment" NOT NULL DEFAULT 'PASS',
    "notes" TEXT,
    "isRepeat" SMALLINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "murojaah_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surahs" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "arabic_name" VARCHAR(50) NOT NULL,
    "ayah_counts" INTEGER NOT NULL,
    "revelation_type" "Revelation" NOT NULL DEFAULT 'MECCAN',

    CONSTRAINT "surahs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ayahs" (
    "id" UUID NOT NULL,
    "surah_id" UUID NOT NULL,
    "ayah_number" INTEGER NOT NULL,
    "juz_number" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "ayahs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "juz" (
    "id" UUID NOT NULL,
    "juz" INTEGER NOT NULL,
    "start_surah" INTEGER NOT NULL,
    "start_ayah" INTEGER NOT NULL,
    "end_surah" INTEGER NOT NULL,
    "end_ayah" INTEGER NOT NULL,

    CONSTRAINT "juz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "juz_evaluations" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "juz_number" INTEGER NOT NULL,
    "evaluation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assessment" "Assessment" NOT NULL DEFAULT 'PASS',
    "notes" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "juz_evaluations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memorizing_plans" (
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

    CONSTRAINT "memorizing_plans_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ayahs_surah_id_ayah_number_key" ON "ayahs"("surah_id", "ayah_number");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_musyrif_id_fkey" FOREIGN KEY ("musyrif_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_recorded_by_fkey" FOREIGN KEY ("recorded_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parents" ADD CONSTRAINT "parents_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memorizing_logs" ADD CONSTRAINT "memorizing_logs_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memorizing_logs" ADD CONSTRAINT "memorizing_logs_musyrif_id_fkey" FOREIGN KEY ("musyrif_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "murojaah_logs" ADD CONSTRAINT "murojaah_logs_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "murojaah_logs" ADD CONSTRAINT "murojaah_logs_musyrif_id_fkey" FOREIGN KEY ("musyrif_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ayahs" ADD CONSTRAINT "ayahs_surah_id_fkey" FOREIGN KEY ("surah_id") REFERENCES "surahs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "juz_evaluations" ADD CONSTRAINT "juz_evaluations_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memorizing_plans" ADD CONSTRAINT "memorizing_plans_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memorizing_plans" ADD CONSTRAINT "memorizing_plans_assigned_by_fkey" FOREIGN KEY ("assigned_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

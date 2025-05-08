/*
  Warnings:

  - Added the required column `grade` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gradeStatus` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GradeStatus" AS ENUM ('ELEMENTARY_SCHOOL', 'JUNIOR_HIGH_SCHOOL', 'SENIOR_HIGH_SCHOOL');

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "grade" VARCHAR NOT NULL,
ADD COLUMN     "gradeStatus" "GradeStatus" NOT NULL,
ADD COLUMN     "name" VARCHAR NOT NULL;

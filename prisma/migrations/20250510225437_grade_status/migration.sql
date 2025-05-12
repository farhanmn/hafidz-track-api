/*
  Warnings:

  - You are about to drop the column `gradeStatus` on the `students` table. All the data in the column will be lost.
  - Added the required column `grade_status` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" DROP COLUMN "gradeStatus",
ADD COLUMN     "grade_status" "GradeStatus" NOT NULL;

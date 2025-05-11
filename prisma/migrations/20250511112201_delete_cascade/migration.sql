-- DropForeignKey
ALTER TABLE "attendances" DROP CONSTRAINT "attendances_recorded_by_fkey";

-- DropForeignKey
ALTER TABLE "attendances" DROP CONSTRAINT "attendances_student_id_fkey";

-- DropForeignKey
ALTER TABLE "ayahs" DROP CONSTRAINT "ayahs_surah_id_fkey";

-- DropForeignKey
ALTER TABLE "juz_evaluations" DROP CONSTRAINT "juz_evaluations_student_id_fkey";

-- DropForeignKey
ALTER TABLE "memorizing_logs" DROP CONSTRAINT "memorizing_logs_musyrif_id_fkey";

-- DropForeignKey
ALTER TABLE "memorizing_logs" DROP CONSTRAINT "memorizing_logs_student_id_fkey";

-- DropForeignKey
ALTER TABLE "memorizing_plans" DROP CONSTRAINT "memorizing_plans_assigned_by_fkey";

-- DropForeignKey
ALTER TABLE "memorizing_plans" DROP CONSTRAINT "memorizing_plans_student_id_fkey";

-- DropForeignKey
ALTER TABLE "murojaah_logs" DROP CONSTRAINT "murojaah_logs_musyrif_id_fkey";

-- DropForeignKey
ALTER TABLE "murojaah_logs" DROP CONSTRAINT "murojaah_logs_student_id_fkey";

-- DropForeignKey
ALTER TABLE "parents" DROP CONSTRAINT "parents_student_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_musyrif_id_fkey";

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_musyrif_id_fkey" FOREIGN KEY ("musyrif_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_recorded_by_fkey" FOREIGN KEY ("recorded_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parents" ADD CONSTRAINT "parents_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memorizing_logs" ADD CONSTRAINT "memorizing_logs_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memorizing_logs" ADD CONSTRAINT "memorizing_logs_musyrif_id_fkey" FOREIGN KEY ("musyrif_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "murojaah_logs" ADD CONSTRAINT "murojaah_logs_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "murojaah_logs" ADD CONSTRAINT "murojaah_logs_musyrif_id_fkey" FOREIGN KEY ("musyrif_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ayahs" ADD CONSTRAINT "ayahs_surah_id_fkey" FOREIGN KEY ("surah_id") REFERENCES "surahs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "juz_evaluations" ADD CONSTRAINT "juz_evaluations_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memorizing_plans" ADD CONSTRAINT "memorizing_plans_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memorizing_plans" ADD CONSTRAINT "memorizing_plans_assigned_by_fkey" FOREIGN KEY ("assigned_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

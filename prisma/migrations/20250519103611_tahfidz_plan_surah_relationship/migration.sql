-- AddForeignKey
ALTER TABLE "tahfidz_plans" ADD CONSTRAINT "tahfidz_plans_surah_id_fkey" FOREIGN KEY ("surah_id") REFERENCES "surahs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "memorizing_logs" ALTER COLUMN "isRepeat" DROP NOT NULL,
ALTER COLUMN "isRepeat" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "attendances" ALTER COLUMN "remark" DROP NOT NULL,
ALTER COLUMN "remark" SET DEFAULT '';

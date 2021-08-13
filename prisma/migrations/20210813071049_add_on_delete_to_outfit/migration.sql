-- DropForeignKey
ALTER TABLE "Outfit" DROP CONSTRAINT "Outfit_modelId_fkey";

-- AddForeignKey
ALTER TABLE "Outfit" ADD FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

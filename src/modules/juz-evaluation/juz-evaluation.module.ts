import { Module } from '@nestjs/common';
import { JuzEvaluationService } from './juz-evaluation.service';
import { JuzEvaluationController } from './juz-evaluation.controller';

@Module({
  controllers: [JuzEvaluationController],
  providers: [JuzEvaluationService],
})
export class JuzEvaluationModule {}

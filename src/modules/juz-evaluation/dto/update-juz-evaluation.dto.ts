import { PartialType } from '@nestjs/swagger';
import { CreateJuzEvaluationDto } from './create-juz-evaluation.dto';

export class UpdateJuzEvaluationDto extends PartialType(CreateJuzEvaluationDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateTahfidzPlanDto } from './create-tahfidz-plan.dto';

export class UpdateTahfidzPlanDto extends PartialType(CreateTahfidzPlanDto) {}

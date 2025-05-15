import { PartialType } from '@nestjs/swagger';
import { CreateMurojaahDto } from './create-murojaah.dto';

export class UpdateMurojaahDto extends PartialType(CreateMurojaahDto) {}

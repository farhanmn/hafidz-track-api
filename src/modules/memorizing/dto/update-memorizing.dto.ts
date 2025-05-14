import { PartialType } from '@nestjs/swagger';
import { CreateMemorizingDto } from './create-memorizing.dto';

export class UpdateMemorizingDto extends PartialType(CreateMemorizingDto) {}

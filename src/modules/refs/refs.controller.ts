import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { RefsService } from './refs.service';
import { CreateSurahDto } from './dto/create-ref.dto';
import { UpdateRefDto } from './dto/update-ref.dto';

@Controller('refs')
export class RefsController {
  constructor(private readonly refsService: RefsService) {}

  @Post('/surah')
  create() {
    return this.refsService.importSurah();
  }

  @Get()
  findAll() {
    return this.refsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefDto: UpdateRefDto) {
    return this.refsService.update(+id, updateRefDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refsService.remove(+id);
  }
}

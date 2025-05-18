import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JuzEvaluationService } from './juz-evaluation.service';
import { CreateJuzEvaluationDto } from './dto/create-juz-evaluation.dto';
import { UpdateJuzEvaluationDto } from './dto/update-juz-evaluation.dto';

@Controller('juz-evaluation')
export class JuzEvaluationController {
  constructor(private readonly juzEvaluationService: JuzEvaluationService) {}

  @Post()
  create(@Body() createJuzEvaluationDto: CreateJuzEvaluationDto) {
    return this.juzEvaluationService.create(createJuzEvaluationDto);
  }

  @Get()
  findAll() {
    return this.juzEvaluationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.juzEvaluationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJuzEvaluationDto: UpdateJuzEvaluationDto) {
    return this.juzEvaluationService.update(+id, updateJuzEvaluationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juzEvaluationService.remove(+id);
  }
}

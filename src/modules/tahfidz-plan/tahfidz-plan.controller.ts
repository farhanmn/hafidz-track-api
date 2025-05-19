import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TahfidzPlanService } from './tahfidz-plan.service';
import { CreateTahfidzPlanDto } from './dto/create-tahfidz-plan.dto';
import { UpdateTahfidzPlanDto } from './dto/update-tahfidz-plan.dto';

@Controller('tahfidz-plan')
export class TahfidzPlanController {
  constructor(private readonly tahfidzPlanService: TahfidzPlanService) {}

  @Post()
  create(@Body() createTahfidzPlanDto: CreateTahfidzPlanDto) {
    return this.tahfidzPlanService.create(createTahfidzPlanDto);
  }

  @Get()
  findAll() {
    return this.tahfidzPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tahfidzPlanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTahfidzPlanDto: UpdateTahfidzPlanDto) {
    return this.tahfidzPlanService.update(+id, updateTahfidzPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tahfidzPlanService.remove(+id);
  }
}

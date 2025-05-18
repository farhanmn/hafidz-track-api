import { Injectable } from '@nestjs/common';
import { CreateJuzEvaluationDto } from './dto/create-juz-evaluation.dto';
import { UpdateJuzEvaluationDto } from './dto/update-juz-evaluation.dto';

@Injectable()
export class JuzEvaluationService {
  async create(createJuzEvaluationDto: CreateJuzEvaluationDto) {
    return 'This action adds a new juzEvaluation';
  }

  findAll() {
    return `This action returns all juzEvaluation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} juzEvaluation`;
  }

  update(id: number, updateJuzEvaluationDto: UpdateJuzEvaluationDto) {
    return `This action updates a #${id} juzEvaluation`;
  }

  remove(id: number) {
    return `This action removes a #${id} juzEvaluation`;
  }
}

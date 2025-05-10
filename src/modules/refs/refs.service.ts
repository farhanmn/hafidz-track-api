import { Injectable } from '@nestjs/common';
import { CreateSurahDto } from './dto/create-ref.dto';
import { UpdateRefDto } from './dto/update-ref.dto';
import { Revelation } from '@prisma/client';
import { prismaClient } from '../../application/database';

@Injectable()
export class RefsService {
  findAll() {
    return `This action returns all refs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ref`;
  }

  update(id: number, updateRefDto: UpdateRefDto) {
    return `This action updates a #${id} ref`;
  }

  remove(id: number) {
    return `This action removes a #${id} ref`;
  }
}

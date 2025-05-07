import { ApiProperty } from '@nestjs/swagger';

export class ResponseSchema<T> {
  @ApiProperty({ example: 200 })
  status: number;

  @ApiProperty({ example: 'Success' })
  message: string;

  @ApiProperty()
  data: T;
}

import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('todo')
export class TodosController {
  @Get()
  findAll() {
    return 'Todolar burada gelecek';
  }

  @Post()
  create() {
    return 'Todo eklendi';
  }

  @Put(':id')
  update() {
    return 'Todo güncellendi';
  }
  @Get(':id')
  findOne() {
    return 'Todo detayları burada gelecek';
  }
}

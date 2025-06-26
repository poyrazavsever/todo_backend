import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { User } from './schemas/todo.schema';

@Controller('todo')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() todo: any): Promise<User> {
    return this.todosService.create(todo);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.todosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() todo: any): Promise<User> {
    return this.todosService.update(id, todo);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.todosService.delete(id);
  }

  @Patch(':id/toggle')
  toggleComplete(@Param('id') id: string): Promise<User> {
    return this.todosService.toggleComplete(id);
  }
}

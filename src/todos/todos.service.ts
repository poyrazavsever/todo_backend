import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(User.name) private readonly todoModel: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.todoModel.find().exec();
  }

  async create(todo: any): Promise<User> {
    const createdTodo = new this.todoModel(todo);
    return createdTodo.save();
  }

  async findOne(id: string): Promise<User> {
    const todo = await this.todoModel.findById(id).exec();
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  async update(id: string, updateData: any): Promise<User> {
    const updatedTodo = await this.todoModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    if (!updatedTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return updatedTodo;
  }

  async delete(id: string): Promise<User> {
    const deletedTodo = await this.todoModel.findByIdAndDelete(id).exec();
    if (!deletedTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return deletedTodo;
  }

  async toggleComplete(id: string): Promise<User> {
    const todo = await this.todoModel.findById(id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    todo.completed = !todo.completed;
    return todo.save();
  }
}

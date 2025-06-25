import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/todo')],
  controllers: [AppController, TodosController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}

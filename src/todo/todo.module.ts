import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo.controller';
import { todoSchema } from './todo.schema';
import { TodoService } from './todo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Todo', schema: todoSchema}])
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Todo } from './todo.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService
    ) {}

    @Get(":id")
    get(@Param('id') id: string) {
        return this.todoService.get(id);
    }

    @Get()
    getAll() {
        return this.todoService.getAll();
    }

    @Post()
    create(@Body() todo: Todo) {
        return this.todoService.create(todo);
    }
}

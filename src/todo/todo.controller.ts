import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Put(":id")
    update(@Param('id') id: string, @Body() todo: Todo) {
        return this.todoService.update(id, todo);
    }

    @Delete(":id")
    delete(@Param('id') id: string) {
        return this.todoService.delete(id);
    }
}

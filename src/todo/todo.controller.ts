import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    constructor() {}

    @Get("hello")
    hello() {
        return "Hello World!";
    }
}

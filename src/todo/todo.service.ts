import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo} from "./todo.schema";

@Injectable()
export class TodoService {

    constructor(@InjectModel('Todo') private readonly todoModel:Model<Todo>) {}

    async get(id){
        let t: any =  await this.todoModel.findById(id);
        if(!t){
            throw new NotFoundException('Could not find todo.');
        }
        return t;
    }

    async getAll(){
        return await this.todoModel.find();
    }

    async create(todo: Todo){
        const newTodo = new this.todoModel(todo);
        await newTodo.save();
        return { message: "Todo created successfully" };
    }

    async update(id, todo: Todo){
        let t: any = await this.todoModel.findById(id);
        t.title = todo.title || t.title;
        t.description = todo.description || t.description;
        t.status = todo.status || t.status;
        await t.save();
        return { message: "Todo updated successfully" };
    }

    async delete(id){
        await this.todoModel.findOneAndRemove(id);
        return { message: "Todo deleted successfully" };
    }
}

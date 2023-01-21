import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Todo {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    status: { type: string, default: "pending", enum: ["pending", "completed"]};
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
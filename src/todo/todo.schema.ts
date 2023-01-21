import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, default: 'pending', enum: ['pending', 'completed']},
});

export interface Todo extends Document {
    id: string;
    title: string;
    description: string;
    status: string;
}
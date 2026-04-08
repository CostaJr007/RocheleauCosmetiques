// src/types/todo.ts

// Interface for a Todo item
export interface Todo {
    id: number;         // Unique identifier for the Todo item
    title: string;      // Title of the Todo item
    completed: boolean; // Status of the Todo item
    createdAt: Date;    // Creation timestamp of the Todo item
    updatedAt: Date;    // Last updated timestamp of the Todo item
}
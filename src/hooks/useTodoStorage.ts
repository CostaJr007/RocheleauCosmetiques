// src/hooks/useTodoStorage.ts
import { useState, useEffect, useCallback } from 'react';
import type { Todo } from '@/types/todo';

const STORAGE_KEY = 'todos_storage';

export function useTodoStorage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Carrega tarefas do localStorage quando a página abre
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem(STORAGE_KEY);
      if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          updatedAt: new Date(todo.updatedAt),
        }));
        setTodos(parsedTodos);
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Salva tarefas no localStorage
  const saveTodos = useCallback((newTodos: Todo[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
      setTodos(newTodos);
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  }, []);

  // Adiciona uma nova tarefa
  const addTodo = useCallback((title: string) => {
    if (!title.trim()) return;
    
    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    saveTodos([...todos, newTodo]);
  }, [todos, saveTodos]);

  // Deleta uma tarefa
  const deleteTodo = useCallback((id: number) => {
    saveTodos(todos.filter(todo => todo.id !== id));
  }, [todos, saveTodos]);

  // Marca tarefa como completa/incompleta
  const toggleTodo = useCallback((id: number) => {
    saveTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
        : todo
    ));
  }, [todos, saveTodos]);

  // Atualiza o título da tarefa
  const updateTodo = useCallback((id: number, title: string) => {
    saveTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, title: title.trim(), updatedAt: new Date() }
        : todo
    ));
  }, [todos, saveTodos]);

  // Limpa todas as tarefas completas
  const clearCompleted = useCallback(() => {
    saveTodos(todos.filter(todo => !todo.completed));
  }, [todos, saveTodos]);

  // Limpa TODAS as tarefas
  const clearAll = useCallback(() => {
    saveTodos([]);
  }, [saveTodos]);

  return {
    todos,
    isLoading,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    clearCompleted,
    clearAll,
  };
}

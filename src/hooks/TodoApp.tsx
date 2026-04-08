// src/pages/TodoApp.tsx
import { useState } from 'react';
import { useTodoStorage } from '@/hooks/useTodoStorage';
import { Trash2, Plus, CheckCircle2, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type FilterType = 'all' | 'active' | 'completed';

export default function TodoApp() {
  const { todos, addTodo, deleteTodo, toggleTodo, clearCompleted } = useTodoStorage();
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Minhas Tarefas
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Organize-se e controle suas tarefas diárias
          </p>
        </div>

        {/* Cartão Principal */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          {/* Campo de Entrada */}
          <div className="flex gap-2 mb-6">
            <Input
              type="text"
              placeholder="Adicione uma nova tarefa..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleAddTodo} className="gap-2">
              <Plus size={20} />
              Adicionar
            </Button>
          </div>

          {/* Botões de Filtro */}
          <div className="flex gap-2 mb-6 border-b dark:border-slate-700 pb-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
              }`}
            >
              Todas ({todos.length})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'active'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
              }`}
            >
              Ativas ({activeCount})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'completed'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
              }`}
            >
              Completas ({completedCount})
            </button>
          </div>

          {/* Lista de Tarefas */}
          <div className="space-y-2">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">
                  {filter === 'all' && 'Nenhuma tarefa ainda. Adicione uma para começar!'}
                  {filter === 'active' && 'Todas as tarefas completas! 🎉'}
                  {filter === 'completed' && 'Nenhuma tarefa completa ainda.'}
                </p>
              </div>
            ) : (
              filteredTodos.map(todo => (
                <div
                  key={todo.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {todo.completed ? (
                      <CheckCircle2 size={24} className="text-green-500" />
                    ) : (
                      <Circle size={24} />
                    )}
                  </button>
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? 'line-through text-gray-500 dark:text-gray-400'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {todo.title}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Botão Limpar Completas */}
          {completedCount > 0 && (
            <div className="mt-6 pt-4 border-t dark:border-slate-700">
              <Button
                variant="outline"
                onClick={clearCompleted}
                className="w-full"
              >
                Limpar Tarefas Completas ({completedCount})
              </Button>
            </div>
          )}
        </div>

        {/* Estatísticas */}
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            {activeCount} ativas · {completedCount} completas · {todos.length} total
          </p>
        </div>
      </div>
    </div>
  );
}

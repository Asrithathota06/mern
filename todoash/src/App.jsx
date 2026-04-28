import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import FilterBar from './components/FilterBar';
import TodoList from './components/TodoList';

const STORAGE_KEY = 'todoash-state';

const initialTodos = [
  { id: 1, title: 'Plan study schedule', completed: false, createdAt: Date.now() - 1000000 },
  { id: 2, title: 'Submit assignment', completed: true, createdAt: Date.now() - 500000 },
  { id: 3, title: 'Review lecture notes', completed: false, createdAt: Date.now() - 250000 },
];

const initialState = {
  theme: 'dark',
  todos: initialTodos,
};

function App() {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : initialState;
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const filteredTodos = useMemo(() => {
    if (filter === 'active') {
      return state.todos.filter((todo) => !todo.completed);
    }

    if (filter === 'completed') {
      return state.todos.filter((todo) => todo.completed);
    }

    return state.todos;
  }, [filter, state.todos]);

  const completedCount = state.todos.filter((todo) => todo.completed).length;

  const addTodo = (title) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    setState((currentState) => ({
      ...currentState,
      todos: [
        {
          id: crypto.randomUUID(),
          title: trimmedTitle,
          completed: false,
          createdAt: Date.now(),
        },
        ...currentState.todos,
      ],
    }));
  };

  const toggleTodo = (todoId) => {
    setState((currentState) => ({
      ...currentState,
      todos: currentState.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  const removeTodo = (todoId) => {
    setState((currentState) => ({
      ...currentState,
      todos: currentState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  const clearCompleted = () => {
    setState((currentState) => ({
      ...currentState,
      todos: currentState.todos.filter((todo) => !todo.completed),
    }));
  };

  const toggleTheme = () => {
    setState((currentState) => ({
      ...currentState,
      theme: currentState.theme === 'dark' ? 'light' : 'dark',
    }));
  };

  return (
    <div className="app-shell">
      <main className="container">
        <Header
          theme={state.theme}
          totalCount={state.todos.length}
          completedCount={completedCount}
          onToggleTheme={toggleTheme}
        />

        <TodoForm onAddTodo={addTodo} />

        <FilterBar filter={filter} onFilterChange={setFilter} onClearCompleted={clearCompleted} />

        <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} onRemoveTodo={removeTodo} />
      </main>
    </div>
  );
}

export default App;
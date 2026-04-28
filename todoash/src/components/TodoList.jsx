import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo, onRemoveTodo }) {
  if (todos.length === 0) {
    return <div className="empty-state">No tasks match this filter.</div>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
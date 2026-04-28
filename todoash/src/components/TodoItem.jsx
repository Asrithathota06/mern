function TodoItem({ todo, onToggleTodo, onRemoveTodo }) {
  const formattedDate = new Date(todo.createdAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <li className="todo-item">
      <input
        className="todo-check"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
        aria-label={`Mark ${todo.title} as ${todo.completed ? 'active' : 'completed'}`}
      />

      <div>
        <h3 className={`todo-title${todo.completed ? ' done' : ''}`}>{todo.title}</h3>
        <div className="todo-meta">Created on {formattedDate}</div>
      </div>

      <div className="todo-actions">
        <button type="button" className="btn-secondary" onClick={() => onToggleTodo(todo.id)}>
          {todo.completed ? 'Undo' : 'Done'}
        </button>
        <button type="button" className="btn-danger" onClick={() => onRemoveTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
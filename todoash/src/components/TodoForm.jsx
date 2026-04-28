import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(title);
    setTitle('');
  };

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a new task"
        aria-label="New task title"
      />
      <button className="btn-primary" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
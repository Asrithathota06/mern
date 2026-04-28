function Header({ theme, totalCount, completedCount, onToggleTheme }) {
  return (
    <header className="hero">
      <div>
        <span className="eyebrow">TodoAsh</span>
        <h1>Pink TODO planner</h1>
        <p className="subtitle">
          Organize study tasks, personal chores, and deadlines in a clean React app with persistent state and a light/dark pink theme.
        </p>
      </div>

      <button className="theme-button" type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? 'Switch to Light Pink' : 'Switch to Dark Pink'}
      </button>

      <div className="stats" aria-label="Task summary">
        <div className="stat-card">
          <strong>{totalCount}</strong>
          <span>Total tasks</span>
        </div>
        <div className="stat-card">
          <strong>{completedCount}</strong>
          <span>Completed</span>
        </div>
        <div className="stat-card">
          <strong>{totalCount - completedCount}</strong>
          <span>Pending</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
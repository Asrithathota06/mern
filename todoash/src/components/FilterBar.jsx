const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
];

function FilterBar({ filter, onFilterChange, onClearCompleted }) {
  return (
    <div className="toolbar">
      <div className="filter-group" role="tablist" aria-label="Task filters">
        {FILTERS.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`filter-btn${filter === item.key ? ' active' : ''}`}
            onClick={() => onFilterChange(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button type="button" className="btn-secondary" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default FilterBar;
import { useState } from 'react';

export default function FilterPanel({ onFilterChange }) {
  const [filters, setFilters] = useState({
    subject: '',
    dueDate: '',
    status: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm">
      <div className="mb-4">
        <label className="block text-label-sm text-text-muted mb-1">Subject</label>
        <select
          name="subject"
          value={filters.subject}
          onChange={handleFilterChange}
          className="w-full p-2 border border-outline-variant/30 rounded-md bg-transparent text-on-surface"
        >
          <option value="">All Subjects</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="music">Music</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-label-sm text-text-muted mb-1">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={filters.dueDate}
          onChange={handleFilterChange}
          className="w-full p-2 border border-outline-variant/30 rounded-md bg-transparent text-on-surface"
        />
      </div>
      <div>
        <label className="block text-label-sm text-text-muted mb-1">Status</label>
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="w-full p-2 border border-outline-variant/30 rounded-md bg-transparent text-on-surface"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>
    </div>
  );
}

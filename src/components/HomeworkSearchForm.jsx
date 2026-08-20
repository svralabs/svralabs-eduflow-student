import { useState } from 'react';

export default function HomeworkSearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDateStart, setDueDateStart] = useState('');
  const [dueDateEnd, setDueDateEnd] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, subject, dueDateStart, dueDateEnd, status });
  };

  return (
    <form onSubmit={handleSubmit} className="px-container-margin mt-2">
      <div className="flex items-center gap-3 bg-surface-container-lowest rounded-full p-1.5 shadow-sm border border-outline-variant/30">
        <div className="flex-1 flex items-center pl-4 gap-3">
          <span className="material-symbols-outlined text-outline">search</span>
          <input
            className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline/70 font-body-base text-body-base"
            placeholder="Search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-primary text-on-primary p-2.5 rounded-full flex items-center justify-center active:scale-90 transition-transform">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'opsz' 20" }}>tune</span>
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <select
          className="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant/30 text-on-surface"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">All Subjects</option>
          <option value="math">Math</option>
          <option value="history">History</option>
          <option value="music">Music</option>
          <option value="physics">Physics</option>
        </select>

        <div className="flex gap-2">
          <input
            type="date"
            className="flex-1 bg-surface-container-lowest rounded-lg p-3 border border-outline-variant/30 text-on-surface"
            value={dueDateStart}
            onChange={(e) => setDueDateStart(e.target.value)}
          />
          <input
            type="date"
            className="flex-1 bg-surface-container-lowest rounded-lg p-3 border border-outline-variant/30 text-on-surface"
            value={dueDateEnd}
            onChange={(e) => setDueDateEnd(e.target.value)}
          />
        </div>

        <select
          className="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant/30 text-on-surface"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>
    </form>
  );
}

import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import HomeworkCard from '../components/HomeworkCard';

export default function HomeworkSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ subject: '', dueDate: '', status: '' });
  const [homeworkList, setHomeworkList] = useState([]);
  const [filteredHomework, setFilteredHomework] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data
  const mockHomework = [
    { id: 1, subject: 'Math', dueDate: '19 May', icon: 'functions', color: '#EEF2FF' },
    { id: 2, subject: 'Science', dueDate: '20 May', icon: 'science', color: '#E6FBF0' },
    { id: 3, subject: 'History', dueDate: '21 May', icon: 'history_edu', color: '#FFF8E6' },
    { id: 4, subject: 'Music', dueDate: '22 May', icon: 'music_note', color: '#FFEFED' },
    { id: 5, subject: 'Math', dueDate: '23 May', icon: 'functions', color: '#EEF2FF' },
    { id: 6, subject: 'Science', dueDate: '24 May', icon: 'science', color: '#E6FBF0' },
    { id: 7, subject: 'History', dueDate: '25 May', icon: 'history_edu', color: '#FFF8E6' },
    { id: 8, subject: 'Music', dueDate: '26 May', icon: 'music_note', color: '#FFEFED' },
  ];

  useEffect(() => {
    setHomeworkList(mockHomework);
  }, []);

  useEffect(() => {
    let results = [...homeworkList];

    // Apply search filter
    if (searchTerm) {
      results = results.filter(item =>
        item.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply other filters
    if (filters.subject) {
      results = results.filter(item =>
        item.subject.toLowerCase() === filters.subject.toLowerCase()
      );
    }

    if (filters.dueDate) {
      results = results.filter(item =>
        new Date(item.dueDate) >= new Date(filters.dueDate)
      );
    }

    if (filters.status) {
      // In a real app, you would filter by status
      // This is just a placeholder
      results = results.filter(item =>
        item.status === filters.status
      );
    }

    setFilteredHomework(results);
    setCurrentPage(1);
  }, [searchTerm, filters, homeworkList]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredHomework.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredHomework.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="px-container-margin mt-2">
      <SearchBar onSearch={setSearchTerm} />
      <FilterPanel onFilterChange={setFilters} />

      <div className="mt-6">
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {currentItems.map(item => (
              <HomeworkCard
                key={item.id}
                subject={item.subject}
                dueDate={item.dueDate}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-on-surface-variant">No homework found matching your criteria.</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-1 p-2 rounded-full bg-surface-container-lowest disabled:opacity-50"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-1 p-2 rounded-full ${currentPage === page ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest text-on-surface'}`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="mx-1 p-2 rounded-full bg-surface-container-lowest disabled:opacity-50"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
}

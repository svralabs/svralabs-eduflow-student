import React, { useState, useEffect } from 'react';
import { subjects, homework } from '../mocks/homeworkSearch';
import styles from './HomeworkSearch.module.css';

export default function HomeworkSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredHomework, setFilteredHomework] = useState(homework);

  useEffect(() => {
    const timer = setTimeout(() => {
      filterHomework();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedSubject, selectedStatus, startDate, endDate]);

  const filterHomework = () => {
    let filtered = [...homework];

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSubject) {
      filtered = filtered.filter(item => item.subject === selectedSubject);
    }

    if (selectedStatus) {
      filtered = filtered.filter(item => item.status === selectedStatus);
    }

    if (startDate) {
      filtered = filtered.filter(item => new Date(item.dueDate) >= new Date(startDate));
    }

    if (endDate) {
      filtered = filtered.filter(item => new Date(item.dueDate) <= new Date(endDate));
    }

    setFilteredHomework(filtered);
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject === selectedSubject ? null : subject);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status === selectedStatus ? null : status);
  };

  const getSubjectColor = (subjectName) => {
    const subject = subjects.find(s => s.name === subjectName);
    return subject ? { backgroundColor: subject.color, color: subject.textColor } : {};
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Search Section */}
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputContainer}>
            <span className="material-symbols-outlined text-outline">search</span>
            <input
              className={styles.searchInput}
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className={styles.searchButton}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'opsz' 20" }}>tune</span>
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <h2 className={styles.filterTitle}>Filters</h2>
        <div className={styles.filterGrid}>
          {/* Subject Filter */}
          <div className={styles.filterCard}>
            <div className={styles.filterCardIcon} style={getSubjectColor(selectedSubject)}>
              <span className="material-symbols-outlined">
                {selectedSubject ? subjects.find(s => s.name === selectedSubject)?.icon : 'subject'}
              </span>
            </div>
            <div className={styles.filterCardContent}>
              <h3 className={styles.filterCardLabel}>Subject</h3>
              <p className={styles.filterCardValue}>{selectedSubject || 'All'}</p>
            </div>
          </div>

          {/* Status Filter */}
          <div className={styles.filterCard}>
            <div className={styles.filterCardIcon} style={selectedStatus === 'completed' ? { backgroundColor: '#E6FBF0', color: '#008545' } : { backgroundColor: '#FFEFED', color: '#B2292F' }}>
              <span className="material-symbols-outlined">
                {selectedStatus === 'completed' ? 'check_circle' : 'pending'}
              </span>
            </div>
            <div className={styles.filterCardContent}>
              <h3 className={styles.filterCardLabel}>Status</h3>
              <p className={styles.filterCardValue}>{selectedStatus || 'All'}</p>
            </div>
          </div>

          {/* Date Range Filter */}
          <div className={styles.filterCard}>
            <div className={styles.filterCardIcon} style={{ backgroundColor: '#EEF2FF', color: '#4900E5' }}>
              <span className="material-symbols-outlined">calendar_month</span>
            </div>
            <div className={styles.filterCardContent}>
              <h3 className={styles.filterCardLabel}>Date Range</h3>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                />
                <span>-</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsHeader}>
          <h2 className={styles.resultsTitle}>Results</h2>
          <p className={styles.resultsCount}>{filteredHomework.length} items</p>
        </div>

        {filteredHomework.length > 0 ? (
          <div className={styles.resultsList}>
            {filteredHomework.map(item => (
              <div key={item.id} className={styles.resultCard}>
                <div className={styles.resultCardIcon} style={getSubjectColor(item.subject)}>
                  <span className="material-symbols-outlined">
                    {subjects.find(s => s.name === item.subject)?.icon}
                  </span>
                </div>
                <div className={styles.resultCardContent}>
                  <h3 className={styles.resultCardLabel}>{item.subject}</h3>
                  <p className={styles.resultCardValue}>{item.dueDate}</p>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <span className="material-symbols-outlined text-4xl text-outline">search_off</span>
            <h3 className={styles.emptyStateTitle}>No results found</h3>
            <p className={styles.emptyStateDescription}>Try adjusting your filters or search term</p>
          </div>
        )}
      </section>
    </div>
  );
}

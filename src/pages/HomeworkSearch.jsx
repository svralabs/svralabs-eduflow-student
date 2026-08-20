import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import HomeworkCard from '../components/HomeworkCard';

const mockHomework = [
  { id: 1, subject: 'Music', date: '19 May', icon: 'music_note', color: '#FFEFED', textColor: '#B2292F' },
  { id: 2, subject: 'Math', date: '21 May', icon: 'functions', color: '#EEF2FF', textColor: '#4900E5' },
  { id: 3, subject: 'History', date: '23 May', icon: 'history_edu', color: '#FFF8E6', textColor: '#852F00' },
  { id: 4, subject: 'Physics', date: '25 May', icon: 'architecture', color: '#E6FBF0', textColor: '#008545' },
];

const mockSubjects = [
  { id: 1, name: 'Music', icon: 'music_note', color: '#FFEFED', textColor: '#B2292F' },
  { id: 2, name: 'History', icon: 'history_edu', color: '#FFF8E6', textColor: '#852F00' },
  { id: 3, name: 'Math', icon: 'functions', color: '#EEF2FF', textColor: '#4900E5' },
  { id: 4, name: 'Physics', icon: 'architecture', color: '#E6FBF0', textColor: '#008545' },
];

export default function HomeworkSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHomework, setFilteredHomework] = useState(mockHomework);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = mockHomework.filter(homework =>
      homework.subject.toLowerCase().includes(term.toLowerCase()) ||
      homework.date.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredHomework(filtered);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      {/* Top App Bar */}
      <header className="bg-background dark:bg-background flex justify-between items-center px-container-margin py-4 w-full docked full-width top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAvkq_L0tO8f6B9IJx1WZt_g5CY1G4ZbUphsQrJLQwCdsaEDxodeFdaXzywo1ol4wqlzknm9e0wNndF---xubA_AUEX2jtVb1bzb9zfnnAT0lPvfpt_qXrn-pkocgu5ZKO4aOOuIApV7f4FMaNkT9Gpgkq2makZjP40fA4kcZWybywGOtT11Xsh_KL5xjF4WX9XLkl6pd-zffBNBAUp-B50RDxJiNH__l_2AVBjrPsQaQuwnxL-G4VA"
              alt="Student profile"
            />
          </div>
          <h1 className="font-headline-md-mobile text-headline-md-mobile font-bold text-primary dark:text-inverse-primary">Good morning, Student</h1>
        </div>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 transition-transform">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Search Section */}
      <div className="px-container-margin mt-2">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Section 1: Subjects */}
      <section className="mt-8">
        <div className="flex justify-between items-end px-container-margin mb-4">
          <h2 className="font-heading-md text-heading-md text-on-background">Subjects</h2>
          <button className="font-label-sm text-label-sm text-primary font-semibold">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-container-margin hide-scrollbar">
          {mockSubjects.map(subject => (
            <div
              key={subject.id}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap active:scale-95 transition-transform"
              style={{ backgroundColor: subject.color, color: subject.textColor }}
            >
              <span className="material-symbols-outlined text-[20px]">{subject.icon}</span>
              <span className="font-label-sm text-label-sm font-bold">{subject.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Homework */}
      <section className="mt-8">
        <div className="flex justify-between items-end px-container-margin mb-4">
          <h2 className="font-heading-md text-heading-md text-on-background">Homework</h2>
          <button className="font-label-sm text-label-sm text-primary font-semibold">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-4 px-container-margin">
          {filteredHomework.map(homework => (
            <HomeworkCard key={homework.id} homework={homework} />
          ))}
        </div>
      </section>

      {/* Section 3: Tests */}
      <section className="mt-8 px-container-margin">
        <div className="flex justify-between items-end mb-4">
          <h2 className="font-heading-md text-heading-md text-on-background">Tests</h2>
          <button className="font-label-sm text-label-sm text-primary font-semibold">See all</button>
        </div>
        <div className="bg-surface-card p-card-padding rounded-[24px] shadow-[0_4px_20px_rgba(73,0,229,0.04)] flex items-center gap-4 active:scale-[0.99] transition-transform">
          <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] text-[#4900E5] flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px]">assignment_turned_in</span>
          </div>
          <div className="flex-1">
            <h3 className="font-body-base text-body-base font-bold text-on-background">Math Test April</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-label-sm text-label-sm text-text-muted">Math</span>
              <div className="w-1 h-1 rounded-full bg-outline/40"></div>
              <span className="font-label-sm text-label-sm text-text-muted">12 Quizzes</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline">chevron_right</span>
        </div>
      </section>

      {/* Floating Navigation Bar */}
      <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-3 mx-auto max-w-md w-[90%] bg-primary-container dark:bg-primary-container rounded-full shadow-lg shadow-primary/20">
        <a className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all active:scale-90" href="#">
          <span className="material-symbols-outlined">home</span>
        </a>
        <a className="flex items-center justify-center bg-surface-container-lowest dark:bg-surface-container-lowest text-primary p-3 rounded-full transition-all active:scale-90" href="#">
          <span className="material-symbols-outlined">assignment</span>
        </a>
        <a className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all active:scale-90" href="#">
          <span className="material-symbols-outlined">calendar_month</span>
        </a>
        <a className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all active:scale-90" href="#">
          <span className="material-symbols-outlined">settings</span>
        </a>
      </nav>
    </div>
  );
}

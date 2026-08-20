import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import HomeworkCard from '../components/HomeworkCard';

export default function HomeworkSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const homeworkItems = [
    { id: 1, subject: 'Music', date: '19 May', icon: 'music_note', color: 'bg-[#FFEFED] text-[#B2292F]' },
    { id: 2, subject: 'Math', date: '21 May', icon: 'functions', color: 'bg-[#EEF2FF] text-[#4900E5]' },
    { id: 3, subject: 'History', date: '23 May', icon: 'history_edu', color: 'bg-[#FFF8E6] text-[#852F00]' },
    { id: 4, subject: 'Physics', date: '25 May', icon: 'architecture', color: 'bg-[#E6FBF0] text-[#008545]' },
  ];

  const filteredHomework = homeworkItems.filter(item =>
    item.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <header className="bg-background dark:bg-background flex justify-between items-center px-container-margin py-4 w-full docked full-width top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img
              className="w-full h-full object-cover"
              alt="Student profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAvkq_L0tO8f6B9IJx1WZt_g5CY1G4ZbUphsQrJLQwCdsaEDxodeFdaXzywo1ol4wqlzknm9e0wNndF---xubA_AUEX2jtVb1bzb9zfnnAT0lPvfpt_qXrn-pkocgu5ZKO4aOOuIApV7f4FMaNkT9Gpgkq2makZjP40fA4kcZWybywGOtT11Xsh_KL5xjF4WX9XLkl6pd-zffBNBAUp-B50RDxJiNH__l_2AVBjrPsQaQuwnxL-G4VA"
            />
          </div>
          <h1 className="font-headline-md-mobile text-headline-md-mobile font-bold text-primary dark:text-inverse-primary">Good morning, Student</h1>
        </div>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 transition-transform">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <div className="px-container-margin mt-2">
        <SearchBar onSearch={setSearchTerm} />
      </div>

      <section className="mt-8">
        <div className="flex justify-between items-end px-container-margin mb-4">
          <h2 className="font-heading-md text-heading-md text-on-background">Homework</h2>
          <button className="font-label-sm text-label-sm text-primary font-semibold">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-4 px-container-margin">
          {filteredHomework.map(item => (
            <HomeworkCard
              key={item.id}
              subject={item.subject}
              date={item.date}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

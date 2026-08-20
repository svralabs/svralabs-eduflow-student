import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Sliders, Music, HistoryEdu, Functions, Architecture, ChevronRight, Notifications, MenuBook, CalendarToday, Person, Home } from 'lucide-react';

const HomeworkSearch = () => {
  return (
    <div className="bg-background text-on-background min-h-screen pb-32">
      {/* Top App Bar */}
      <header className="bg-background dark:bg-background flex justify-between items-center px-container-margin py-4 w-full docked full-width top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img className="w-full h-full object-cover" alt="A professional close-up studio portrait of a young college student with a friendly expression. The lighting is soft and warm, reflecting a modern light-mode educational environment. The background is a clean, neutral soft purple that matches the EdTech application's aesthetic. High-quality digital photography with sharp focus on the eyes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAvkq_L0tO8f6B9IJx1WZt_g5CY1G4ZbUphsQrJLQwCdsaEDxodeFdaXzywo1ol4wqlzknm9e0wNndF---xubA_AUEX2jtVb1bzb9zfnnAT0lPvfpt_qXrn-pkocgu5ZKO4aOOuIApV7f4FMaNkT9Gpgkq2makZjP40fA4kcZWybywGOtT11Xsh_KL5xjF4WX9XLkl6pd-zffBNBAUp-B50RDxJiNH__l_2AVBjrPsQaQuwnxL-G4VA"/>
          </div>
          <h1 className="font-headline-md-mobile text-headline-md-mobile font-bold text-primary dark:text-inverse-primary">Good morning, Student</h1>
        </div>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 transition-transform">
          <Notifications size={20} />
        </button>
      </header>

      {/* Search Section */}
      <div className="px-container-margin mt-2">
        <div className="flex items-center gap-3 bg-surface-container-lowest rounded-full p-1.5 shadow-sm border border-outline-variant/30">
          <div className="flex-1 flex items-center pl-4 gap-3">
            <Search size={20} className="text-outline" />
            <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline/70 font-body-base text-body-base" placeholder="Search" type="text"/>
          </div>
          <button className="bg-primary text-on-primary p-2.5 rounded-full flex items-center justify-center active:scale-90 transition-transform">
            <Sliders size={20} />
          </button>
        </div>
      </div>

      {/* Section 1: Subjects */}
      <section className="mt-8">
        <div className="flex justify-between items-end px-container-margin mb-4">
          <h2 className="font-heading-md text-heading-md text-on-background">Subjects</h2>
          <button className="font-label-sm text-label-sm text-primary font-semibold">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-container-margin hide-scrollbar">
          {/* Music Badge */}
          <div className="flex items-center gap-2 bg-[#FFEFED] text-[#B2292F] px-4 py-2.5 rounded-full whitespace-nowrap active:scale-95 transition-transform">
            <Music size={20} />
            <span className="font-label-sm text-label-sm font-bold">Music</span>
          </div>
          {/* History Badge */}
          <div className="flex items-center gap-2 bg-[#FFF8E6] text-[#852F00] px-4 py-2.5 rounded-full whitespace-nowrap active:scale-95 transition-transform">
            <HistoryEdu size={20} />
            <span className="font-label-sm text-label-sm font-bold">History</span>
          </div>
          {/* Math Badge */}
          <div className="flex items-center gap-2 bg-[#EEF2FF] text-[#4900E5] px-4 py-2.5 rounded-full whitespace-nowrap active:scale-95 transition-transform">
            <Functions size={20} />
            <span className="font-label-sm text-label-sm font-bold">Math</span>
          </div>
          {/* Physics Badge (Extra for scroll feel) */}
          <div className="flex items-center gap-2 bg-[#E6FBF0] text-[#008545] px-4 py-2.5 rounded-full whitespace-nowrap active:scale-95 transition-transform">
            <Architecture size={20} />
            <span className="font-label-sm text-label-sm font-bold">Physics</span>
          </div>
        </div>
      </section>

      {/* Section 2: Homework */}
      <section className="mt-8">
        <div className="flex justify-between items-end px-container-margin mb-4">
          <h2 className="font-heading-md text-heading-md text-on-background">Homework</h2>
          <button className="font-label-sm text-label-sm text-primary font-semibold">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-4 px-container-margin">
          {/* Homework Card 1 */}
          <div className="bg-surface-card p-card-padding rounded-[24px] shadow-[0_4px_20px_rgba(73,0,229,0.04)] flex flex-col items-start gap-4 active:scale-[0.98] transition-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FFEFED] text-[#B2292F] flex items-center justify-center">
              <Music size={20} />
            </div>
            <div>
              <h3 className="font-label-sm text-label-sm text-text-muted mb-1">Music</h3>
              <p className="font-body-base text-body-base font-bold text-on-background">19 May</p>
            </div>
          </div>
          {/* Homework Card 2 */}
          <div className="bg-surface-card p-card-padding rounded-[24px] shadow-[0_4px_20px_rgba(73,0,229,0.04)] flex flex-col items-start gap-4 active:scale-[0.98] transition-transform">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4900E5] flex items-center justify-center">
              <Functions size={20} />
            </div>
            <div>
              <h3 className="font-label-sm text-label-sm text-text-muted mb-1">Math</h3>
              <p className="font-body-base text-body-base font-bold text-on-background">21 May</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Tests */}
      <section className="mt-8 px-container-margin">
        <div className="flex justify-between items-end mb-4">
          <h2 className="font-heading-md text-heading-md text-on-background">Tests</h2>
          <button className="font-label-sm text-label-sm text-primary font-semibold">See all</button>
        </div>
        {/* Full-width test card */}
        <div className="bg-surface-card p-card-padding rounded-[24px] shadow-[0_4px_20px_rgba(73,0,229,0.04)] flex items-center gap-4 active:scale-[0.99] transition-transform">
          <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] text-[#4900E5] flex items-center justify-center">
            <MenuBook size={32} />
          </div>
          <div className="flex-1">
            <h3 className="font-body-base text-body-base font-bold text-on-background">Math Test April</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-label-sm text-label-sm text-text-muted">Math</span>
              <div className="w-1 h-1 rounded-full bg-outline/40"></div>
              <span className="font-label-sm text-label-sm text-text-muted">12 Quizzes</span>
            </div>
          </div>
          <ChevronRight size={20} className="text-outline" />
        </div>
      </section>

      {/* Floating Navigation Bar */}
      <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-3 mx-auto max-w-md w-[90%] bg-primary-container dark:bg-primary-container rounded-full shadow-lg shadow-primary/20">
        {/* Home */}
        <Link to="/" className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all active:scale-90">
          <Home size={24} />
        </Link>
        {/* Homework (Active) */}
        <Link to="/homework" className="flex items-center justify-center bg-surface-container-lowest dark:bg-surface-container-lowest text-primary dark:text-primary rounded-full p-3 shadow-sm active:scale-90 transition-transform">
          <MenuBook size={24} />
        </Link>
        {/* Calendar */}
        <Link to="/calendar" className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all active:scale-90">
          <CalendarToday size={24} />
        </Link>
        {/* Profile */}
        <Link to="/profile" className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all active:scale-90">
          <Person size={24} />
        </Link>
      </nav>
    </div>
  );
};

export default HomeworkSearch;
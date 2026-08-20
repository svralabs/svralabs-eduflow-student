import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Screen3CalendarExamsSchedule() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="flex justify-between items-center px-container-margin py-4 w-full bg-background dark:bg-background">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high ring-2 ring-primary/10">
<img className="w-full h-full object-cover" data-alt="A portrait of a cheerful young student with short dark hair, wearing a casual light blue hoodie. The background is a soft-focus library with warm, modern lighting, maintaining the app's clean and approachable corporate aesthetic with soft purple and white tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Kog54SLJrp3bAkWlTq8XGO85uW45u3yTzYcsYPjce_FiaJe64qF0lDNO5FEBhhM9db2-k559EFfs2BgFCZOBVRjDqHxgndmA5WnnK6vHsHeIHRB4IK75yKNeS-NAqpMbGOuIK3sBK0zx36T7fMKAeL5bXmBDRc6_g4GZYAaq-fB3BfHNoUU2Nd9zjVOJmCJcnEZMhvx2TnFZ93w4EKMvp7ohsgXi4nL_-zCOKrsMdHgjmQVxR3g33A"/>
</div>
<h1 className="font-headline-md-mobile text-headline-md-mobile font-bold text-primary">Good morning, Student</h1>
</div>
<button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-full transition-colors active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary">notifications</span>
</button>
</header>
<main className="px-container-margin mt-2">

<section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm mb-8">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-headline-md text-on-surface">May</h2>
<div className="flex gap-2">
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>

<div className="calendar-grid text-on-surface-variant font-label-sm text-label-sm mb-4">
<div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
</div>

<div className="calendar-grid gap-y-4">

<div className="flex items-center justify-center">
<div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary-container text-white font-semibold">
                        1
                    </div>
</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">2</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">3</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">4</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">5</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">6</div>
<div className="flex items-center justify-center">
<div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold shadow-md shadow-primary/20">
                        7
                        <span className="absolute -top-1 -right-1 bg-secondary text-[10px] px-1 rounded-full text-white border-2 border-surface-container-lowest">+2</span>
</div>
</div>

<div className="w-10 h-10 flex items-center justify-center text-on-surface">8</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">9</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">10</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">11</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">12</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">13</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">14</div>

<div className="w-10 h-10 flex items-center justify-center text-on-surface">15</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">16</div>
<div className="flex items-center justify-center">
<div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold shadow-md shadow-primary/20">
                        17
                        <span className="absolute -top-1 -right-1 bg-secondary text-[10px] px-1 rounded-full text-white border-2 border-surface-container-lowest">+2</span>
</div>
</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">18</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">19</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">20</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">21</div>

<div className="w-10 h-10 flex items-center justify-center text-on-surface">22</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">23</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">24</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">25</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">26</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">27</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">28</div>

<div className="flex items-center justify-center">
<div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-fixed-dim text-primary font-semibold">
                        29
                    </div>
</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">30</div>
<div className="w-10 h-10 flex items-center justify-center text-on-surface">31</div>
<div className="w-10 h-10 flex items-center justify-center text-outline-variant">1</div>
<div className="w-10 h-10 flex items-center justify-center text-outline-variant">2</div>
<div className="w-10 h-10 flex items-center justify-center text-outline-variant">3</div>
<div className="w-10 h-10 flex items-center justify-center text-outline-variant">4</div>
</div>
</section>

<div className="flex justify-between items-center mb-4">
<h3 className="font-headline-md text-headline-md text-on-surface">Upcoming exams</h3>
<button className="text-primary font-label-sm text-label-sm hover:underline">See all</button>
</div>

<div className="space-y-4">

<div className="bg-surface-card rounded-3xl p-card-padding shadow-sm flex items-start gap-4 active:scale-[0.98] transition-transform duration-200 cursor-pointer">
<div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary-container/10 flex flex-col items-center justify-center">
<span className="text-secondary-container font-bold text-xl">17</span>
<span className="text-secondary-container text-[10px] uppercase font-bold tracking-wider">May</span>
</div>
<div className="flex-grow">
<h4 className="font-heading-md text-heading-md text-on-surface mb-1">Math Test</h4>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A professional portrait of Dr. Anna Lesli, a friendly female mathematics professor in her late 40s with glasses and a warm smile. She is in a bright, modern classroom setting with educational diagrams softly blurred in the background. The lighting is clean and vibrant, fitting a modern professional edtech interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj9-AQiE5wlPFS2n4jtt6wgSbwXhU76Dl9aGqsi3vV9CeyHeuXOjP0L1dnhSRgAfQVvI8qYAv1hvcwAu6ygCCieVyXU3_t51XKTaTc1sYVJ8Xhsr_QyDb8Jpfb7GPfYdwRhUwErw7Oa7Vtl-YdmwalXKqc4EaN-5JhSkrHN5Nros3sY9AbGH6y3OvcGk7qlS6nqZ55BVhrwkOnhmP4mqtgiUpIJBeJETZcUPHoRWd6oCdqJMI6F_UDeA"/>
</div>
<p className="text-on-surface-variant font-label-sm text-label-sm">Instructor • Dr. Anna Lesli</p>
</div>
</div>
<div className="self-center">
<span className="material-symbols-outlined text-outline">chevron_right</span>
</div>
</div>

<div className="bg-surface-card rounded-3xl p-card-padding shadow-sm flex items-start gap-4 active:scale-[0.98] transition-transform duration-200 cursor-pointer">
<div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#fe6060]/10 flex flex-col items-center justify-center">
<span className="text-[#fe6060] font-bold text-xl">17</span>
<span className="text-[#fe6060] text-[10px] uppercase font-bold tracking-wider">May</span>
</div>
<div className="flex-grow">
<h4 className="font-heading-md text-heading-md text-on-surface mb-1">History Test</h4>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A professional portrait of Dr. Kate Adams, an engaging female history professor in her mid-30s with her hair in a neat bun. She wears a professional navy blazer. The background consists of a stylish, modern office with historical maps and artifacts on shelves, rendered with the same clean, bright, and modern educational aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQn1lVva9poPwhoit-2TYvrWjevh6TtcZel4lYEOppA9uUL9XEZPEmw4jA3kYIVVmCctjRaJkBAWQQR4ChAwx4hsOrIF_DOo1mvPG489nWIBPgv5bMkPFP3BcIRIFrTuOAgDVt0Db9COxphKX8LzpKQWrDEmYQ0L8c_MHFOAiXAUFCbBAAeywO87QzeUcQm7xdZPHlQi5d0toWN9er7_pgvPWYvPcHyoAl61y0NpkHrx-1j1hBLC9t3w"/>
</div>
<p className="text-on-surface-variant font-label-sm text-label-sm">Instructor • Dr. Kate Adams</p>
</div>
</div>
<div className="self-center">
<span className="material-symbols-outlined text-outline">chevron_right</span>
</div>
</div>

<div className="bg-surface-card rounded-3xl p-card-padding shadow-sm flex items-start gap-4 opacity-60">
<div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-fixed-dim flex flex-col items-center justify-center">
<span className="text-primary font-bold text-xl">20</span>
<span className="text-primary text-[10px] uppercase font-bold tracking-wider">May</span>
</div>
<div className="flex-grow">
<h4 className="font-heading-md text-heading-md text-on-surface mb-1">Physics Quiz</h4>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-[14px] text-outline">person</span>
</div>
<p className="text-on-surface-variant font-label-sm text-label-sm">Instructor • Prof. Marcus J.</p>
</div>
</div>
<div className="self-center">
<span className="material-symbols-outlined text-outline">chevron_right</span>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-3 mx-auto max-w-md bg-primary-container dark:bg-primary-container shadow-lg shadow-primary/20 rounded-full w-[90%]">
<button className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined">home</span>
</button>
<button className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined">menu_book</span>
</button>

<button className="flex items-center justify-center bg-surface-container-lowest dark:bg-surface-container-lowest text-primary dark:text-primary rounded-full p-3 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>calendar_today</span>
</button>
<button className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined">person</span>
</button>
</nav>


    </div>
  );
}

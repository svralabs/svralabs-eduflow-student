import React, { useState } from 'react';
import CalendarGrid from '../components/CalendarGrid';
import ExamCard from '../components/ExamCard';

const mockExams = [
  {
    id: 1,
    date: '17 May',
    day: '17',
    month: 'May',
    title: 'Math Test',
    time: '09:00 AM - 11:00 AM',
    location: 'Room 101',
    status: 'Upcoming',
    color: 'bg-secondary-container/10',
    textColor: 'text-secondary-container',
  },
  {
    id: 2,
    date: '24 May',
    day: '24',
    month: 'May',
    title: 'Science Exam',
    time: '10:00 AM - 12:00 PM',
    location: 'Lab 205',
    status: 'Upcoming',
    color: 'bg-primary-container/10',
    textColor: 'text-primary-container',
  },
  {
    id: 3,
    date: '30 May',
    day: '30',
    month: 'May',
    title: 'History Quiz',
    time: '02:00 PM - 03:30 PM',
    location: 'Room 203',
    status: 'Upcoming',
    color: 'bg-tertiary-container/10',
    textColor: 'text-tertiary-container',
  },
];

export default function CalendarExams() {
  const [currentMonth, setCurrentMonth] = useState('May');

  const handlePrevMonth = () => {
    // Implement month navigation logic
  };

  const handleNextMonth = () => {
    // Implement month navigation logic
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      {/* Top App Bar */}
      <header className="flex justify-between items-center px-container-margin py-4 w-full bg-background dark:bg-background">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high ring-2 ring-primary/10">
            <img
              className="w-full h-full object-cover"
              alt="Student portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Kog54SLJrp3bAkWlTq8XGO85uW45u3yTzYcsYPjce_FiaJe64qF0lDNO5FEBhhM9db2-k559EFfs2BgFCZOBVRjDqHxgndmA5WnnK6vHsHeIHRB4IK75yKNeS-NAqpMbGOuIK3sBK0zx36T7fMKAeL5bXmBDRc6_g4GZYAaq-fB3BfHNoUU2Nd9zjVOJmCJcnEZMhvx2TnFZ93w4EKMvp7ohsgXi4nL_-zCOKrsMdHgjmQVxR3g33A"
            />
          </div>
          <h1 className="font-headline-md-mobile text-headline-md-mobile font-bold text-primary">Good morning, Student</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-full transition-colors active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      </header>

      <main className="px-container-margin mt-2">
        {/* Calendar Section */}
        <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-md text-headline-md text-on-surface">{currentMonth}</h2>
            <div className="flex gap-2">
              <button
                className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline"
                onClick={handlePrevMonth}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline"
                onClick={handleNextMonth}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <CalendarGrid />
        </section>

        {/* Upcoming Exams Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline-md text-headline-md text-on-surface">Upcoming exams</h3>
          <button className="text-primary font-label-sm text-label-sm hover:underline">See all</button>
        </div>

        {/* Exam Cards */}
        <div className="space-y-4">
          {mockExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </main>
    </div>
  );
}

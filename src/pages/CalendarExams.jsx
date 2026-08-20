import React, { useState } from 'react';
import ExamEventCard from '../components/ExamEventCard';

const mockExams = [
  {
    id: 1,
    date: 17,
    month: 'May',
    title: 'Math Test',
    time: '9:00 AM - 11:00 AM',
    location: 'Room 101',
    status: 'upcoming'
  },
  {
    id: 2,
    date: 24,
    month: 'May',
    title: 'Science Exam',
    time: '2:00 PM - 4:00 PM',
    location: 'Lab 205',
    status: 'upcoming'
  },
  {
    id: 3,
    date: 29,
    month: 'May',
    title: 'History Quiz',
    time: '10:00 AM - 12:00 PM',
    location: 'Room 303',
    status: 'upcoming'
  }
];

export default function CalendarExams() {
  const [view, setView] = useState('month');
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const renderCalendarDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10 flex items-center justify-center text-outline-variant"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isExamDay = mockExams.some(exam => exam.date === i);
      const examCount = mockExams.filter(exam => exam.date === i).length;

      days.push(
        <div key={`day-${i}`} className="flex items-center justify-center">
          <div className={`relative w-10 h-10 flex items-center justify-center rounded-full ${isExamDay ? 'bg-primary text-white font-semibold shadow-md shadow-primary/20' : 'text-on-surface'}`}>
            {i}
            {isExamDay && examCount > 1 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-[10px] px-1 rounded-full text-white border-2 border-surface-container-lowest">
                +{examCount - 1}
              </span>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="px-container-margin mt-2">
      <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            {currentDate.toLocaleString('default', { month: 'long' })}
          </h2>
          <div className="flex gap-2">
            <button onClick={handlePrevMonth} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button onClick={handleNextMonth} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setView('month')}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm ${view === 'month' ? 'bg-primary text-on-primary' : 'text-outline hover:bg-surface-container-high'}`}
            >
              Month
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm ${view === 'week' ? 'bg-primary text-on-primary' : 'text-outline hover:bg-surface-container-high'}`}
            >
              Week
            </button>
            <button
              onClick={() => setView('day')}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm ${view === 'day' ? 'bg-primary text-on-primary' : 'text-outline hover:bg-surface-container-high'}`}
            >
              Day
            </button>
          </div>
        </div>

        {view === 'month' && (
          <>
            <div className="calendar-grid text-on-surface-variant font-label-sm text-label-sm mb-4">
              <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
            </div>
            <div className="calendar-grid gap-y-4">
              {renderCalendarDays()}
            </div>
          </>
        )}

        {view === 'week' && (
          <div className="bg-surface-container-high rounded-2xl p-4">
            <p className="text-on-surface-variant">Week view implementation</p>
          </div>
        )}

        {view === 'day' && (
          <div className="bg-surface-container-high rounded-2xl p-4">
            <p className="text-on-surface-variant">Day view implementation</p>
          </div>
        )}
      </section>

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-headline-md text-headline-md text-on-surface">Upcoming exams</h3>
        <button className="text-primary font-label-sm text-label-sm hover:underline">See all</button>
      </div>

      <div className="space-y-4">
        {mockExams.map(exam => (
          <ExamEventCard
            key={exam.id}
            date={exam.date}
            month={exam.month}
            title={exam.title}
            time={exam.time}
            location={exam.location}
            status={exam.status}
          />
        ))}
      </div>
    </div>
  );
}

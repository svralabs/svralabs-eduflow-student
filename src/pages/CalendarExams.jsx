import { useState } from 'react';
import ExamCard from '../components/ExamCard';

const mockExams = [
  {
    id: 1,
    date: 17,
    month: 'May',
    title: 'Math Test',
    time: '10:00 AM - 12:00 PM',
    location: 'Room 101',
    status: 'Upcoming'
  },
  {
    id: 2,
    date: 24,
    month: 'May',
    title: 'Science Exam',
    time: '2:00 PM - 4:00 PM',
    location: 'Lab 3',
    status: 'Upcoming'
  },
  {
    id: 3,
    date: 29,
    month: 'May',
    title: 'History Quiz',
    time: '9:00 AM - 11:00 AM',
    location: 'Room 205',
    status: 'Upcoming'
  }
];

export default function CalendarExams() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [exams, setExams] = useState(mockExams);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderCalendarDays = () => {
    const days = [];
    const prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    // Previous month days
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`prev-${i}`} className="w-10 h-10 flex items-center justify-center text-outline-variant">
          {prevMonthDays - firstDayOfMonth + i + 1}
        </div>
      );
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const isExamDay = exams.some(exam =>
        exam.date === i &&
        exam.month === monthNames[currentDate.getMonth()]
      );

      const examCount = exams.filter(exam =>
        exam.date === i &&
        exam.month === monthNames[currentDate.getMonth()]
      ).length;

      days.push(
        <div key={i} className="flex items-center justify-center">
          {isExamDay ? (
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold shadow-md shadow-primary/20">
              {i}
              {examCount > 1 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-[10px] px-1 rounded-full text-white border-2 border-surface-container-lowest">
                  +{examCount}
                </span>
              )}
            </div>
          ) : (
            <div className="w-10 h-10 flex items-center justify-center text-on-surface">
              {i}
            </div>
          )}
        </div>
      );
    }

    // Next month days
    const totalCells = 42;
    const remainingCells = totalCells - days.length;

    for (let i = 1; i <= remainingCells; i++) {
      days.push(
        <div key={`next-${i}`} className="w-10 h-10 flex items-center justify-center text-outline-variant">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <header className="flex justify-between items-center px-container-margin py-4 w-full bg-background dark:bg-background">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high ring-2 ring-primary/10">
            <img className="w-full h-full object-cover" alt="Student profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Kog54SLJrp3bAkWlTq8XGO85uW45u3yTzYcsYPjce_FiaJe64qF0lDNO5FEBhhM9db2-k559EFfs2BgFCZOBVRjDqHxgndmA5WnnK6vHsHeIHRB4IK75yKNeS-NAqpMbGOuIK3sBK0zx36T7fMKAeL5bXmBDRc6_g4GZYAaq-fB3BfHNoUU2Nd9zjVOJmCJcnEZMhvx2TnFZ93w4EKMvp7ohsgXi4nL_-zCOKrsMdHgjmQVxR3g33A" />
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
            <h2 className="font-headline-md text-headline-md text-on-surface">{monthNames[currentDate.getMonth()]}</h2>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={nextMonth} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="calendar-grid text-on-surface-variant font-label-sm text-label-sm mb-4">
            <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
          </div>

          <div className="calendar-grid gap-y-4">
            {renderCalendarDays()}
          </div>
        </section>

        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline-md text-headline-md text-on-surface">Upcoming exams</h3>
          <button className="text-primary font-label-sm text-label-sm hover:underline">See all</button>
        </div>

        <div className="space-y-4">
          {exams.map(exam => (
            <ExamCard
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
      </main>
    </div>
  );
}

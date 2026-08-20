import React from 'react';

export default function CalendarView({ events, currentDate, onEventClick, onDateChange }) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const days = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="w-10 h-10 flex items-center justify-center text-outline-variant"></div>);
  }

  // Add cells for each day of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const dayEvents = events.filter(event => new Date(event.date).getDate() === i);
    const isToday = date.toDateString() === new Date().toDateString();

    days.push(
      <div key={`day-${i}`} className="flex items-center justify-center">
        <div
          className={`relative w-10 h-10 flex items-center justify-center rounded-full ${
            isToday ? 'bg-secondary-container text-white font-semibold' : 'text-on-surface'
          }`}
          onClick={() => onEventClick(dayEvents[0])}
        >
          {i}
          {dayEvents.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-secondary text-[10px] px-1 rounded-full text-white border-2 border-surface-container-lowest">
              +{dayEvents.length}
            </span>
          )}
        </div>
      </div>
    );
  }

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    onDateChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    onDateChange(newDate);
  };

  return (
    <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-headline-md text-headline-md text-on-surface">{monthNames[currentDate.getMonth()]}</h2>
        <div className="flex gap-2">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button onClick={handleNextMonth} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="calendar-grid text-on-surface-variant font-label-sm text-label-sm mb-4">
        <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
      </div>
      <div className="calendar-grid gap-y-4">
        {days}
      </div>
    </section>
  );
}

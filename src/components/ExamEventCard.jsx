import React from 'react';

export default function ExamEventCard({ date, month, title, time, location, status }) {
  const statusColors = {
    upcoming: 'bg-secondary-container/10 text-secondary-container',
    completed: 'bg-primary/10 text-primary',
    cancelled: 'bg-error/10 text-error'
  };

  return (
    <div className="bg-surface-card rounded-3xl p-card-padding shadow-sm flex items-start gap-4 active:scale-[0.98] transition-transform duration-200 cursor-pointer">
      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${statusColors[status]} flex flex-col items-center justify-center`}>
        <span className="font-bold text-xl">{date}</span>
        <span className="text-[10px] uppercase font-bold tracking-wider">{month}</span>
      </div>
      <div className="flex-grow">
        <h4 className="font-heading-md text-heading-md text-on-surface mb-1">{title}</h4>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-sm">schedule</span>
          <span className="text-body-sm text-on-surface-variant">{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">location_on</span>
          <span className="text-body-sm text-on-surface-variant">{location}</span>
        </div>
      </div>
    </div>
  );
}

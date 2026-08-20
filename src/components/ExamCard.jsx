import React from 'react';

export default function ExamCard({ exam }) {
  return (
    <div className="bg-surface-card rounded-3xl p-card-padding shadow-sm flex items-start gap-4 active:scale-[0.98] transition-transform duration-200 cursor-pointer">
      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${exam.color} flex flex-col items-center justify-center`}>
        <span className={`${exam.textColor} font-bold text-xl`}>{exam.day}</span>
        <span className={`${exam.textColor} text-[10px] uppercase font-bold tracking-wider`}>{exam.month}</span>
      </div>
      <div className="flex-grow">
        <h4 className="font-heading-md text-heading-md text-on-surface mb-1">{exam.title}</h4>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-outline text-sm">schedule</span>
          <span className="font-label-sm text-label-sm text-outline">{exam.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-outline text-sm">location_on</span>
          <span className="font-label-sm text-label-sm text-outline">{exam.location}</span>
        </div>
      </div>
      <div className="flex-shrink-0 flex items-center">
        <span className="text-primary font-label-sm text-label-sm">{exam.status}</span>
      </div>
    </div>
  );
}

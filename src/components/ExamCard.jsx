import { Calendar } from 'lucide-react';

export default function ExamCard({ date, month, title, time, location, status }) {
  const statusColors = {
    'Upcoming': 'bg-secondary-container/10 text-secondary-container',
    'Completed': 'bg-primary/10 text-primary',
    'Cancelled': 'bg-error/10 text-error'
  };

  return (
    <div className="bg-surface-card rounded-3xl p-card-padding shadow-sm flex items-start gap-4 active:scale-[0.98] transition-transform duration-200 cursor-pointer">
      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary-container/10 flex flex-col items-center justify-center">
        <span className="text-secondary-container font-bold text-xl">{date}</span>
        <span className="text-secondary-container text-[10px] uppercase font-bold tracking-wider">{month}</span>
      </div>
      <div className="flex-grow">
        <h4 className="font-heading-md text-heading-md text-on-surface mb-1">{title}</h4>
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={16} className="text-outline-variant" />
          <span className="text-body-sm text-on-surface-variant">{time}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-outline-variant">location_on</span>
          <span className="text-body-sm text-on-surface-variant">{location}</span>
        </div>
        <div className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusColors[status]}`}>
          {status}
        </div>
      </div>
    </div>
  );
}

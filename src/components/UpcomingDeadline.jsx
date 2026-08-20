export default function UpcomingDeadline({ title, subject, dueDate, daysLeft }) {
  return (
    <div className="bg-surface-container-low rounded-2xl p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-title-sm font-title-sm text-primary">{title}</h3>
          <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">{subject}</p>
        </div>
        <div className="text-right">
          <p className="text-label-sm font-label-sm text-on-surface-variant">{dueDate}</p>
          <span className={`text-label-sm font-label-sm ${daysLeft <= 3 ? 'text-error' : 'text-primary'}`}>
            {daysLeft} days left
          </span>
        </div>
      </div>
    </div>
  );
}

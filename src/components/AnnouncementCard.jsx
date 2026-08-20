export default function AnnouncementCard({ announcement }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-4 flex items-start gap-4 hover:bg-surface-container-low transition-colors">
      <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
        <span className="material-symbols-outlined text-on-primary-container">campaign</span>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-headline-sm text-headline-sm font-bold text-primary">{announcement.title}</h3>
          <span className="text-label-sm font-label-sm text-outline">{announcement.date}</span>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">{announcement.content}</p>
      </div>
    </div>
  );
}

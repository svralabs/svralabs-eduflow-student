export default function QuickActionButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-surface-container-high transition-colors active:scale-95"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-primary-container rounded-full mb-1">
        <span className="material-symbols-outlined text-on-primary-container">{icon}</span>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface-variant">{label}</span>
    </button>
  );
}

export default function QuickActionButton({ label, active }) {
  return (
    <button
      className={`px-6 py-2.5 rounded-full text-label-sm font-label-sm ${
        active
          ? 'bg-surface-container-highest text-on-surface-variant active-pill shadow-md shadow-primary/20 transition-all scale-105'
          : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high transition-colors'
      }`}
    >
      {label}
    </button>
  );
}

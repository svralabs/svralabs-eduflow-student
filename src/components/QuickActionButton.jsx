import React from 'react';

export default function QuickActionButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors active:scale-95"
    >
      <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center">
        <span className="material-symbols-outlined text-on-primary-container">{icon}</span>
      </div>
      <span className="text-label-sm text-on-surface-variant">{label}</span>
    </button>
  );
}

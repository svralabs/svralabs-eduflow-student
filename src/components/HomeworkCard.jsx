import React from 'react';

export default function HomeworkCard({ homework }) {
  return (
    <div className="bg-surface-card p-card-padding rounded-[24px] shadow-[0_4px_20px_rgba(73,0,229,0.04)] flex flex-col items-start gap-4 active:scale-[0.98] transition-transform">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: homework.color, color: homework.textColor }}
      >
        <span className="material-symbols-outlined">{homework.icon}</span>
      </div>
      <div>
        <h3 className="font-label-sm text-label-sm text-text-muted mb-1">{homework.subject}</h3>
        <p className="font-body-base text-body-base font-bold text-on-background">{homework.date}</p>
      </div>
    </div>
  );
}

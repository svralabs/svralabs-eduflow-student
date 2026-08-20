import React from 'react';

export default function UpcomingTaskList({ tasks }) {
  return (
    <div className="bg-surface-container rounded-2xl p-6">
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-4">Upcoming Tasks</h2>
      <ul className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container">{task.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-label-md text-label-md text-on-surface">{task.title}</h3>
              <p className="text-label-sm text-on-surface-variant">{task.due}</p>
            </div>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors active:scale-95">
              <span className="material-symbols-outlined text-primary">more_vert</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';
import ProgressBar from './ProgressBar';

export default function Card({ subject, teacher, progress, color, icon, teacherImage }) {
  return (
    <div className={`bg-${color} rounded-3xl p-card-padding flex flex-col justify-between aspect-[4/5] relative overflow-hidden group active:scale-[0.98] transition-transform`}>
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-white">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-white font-headline-md text-headline-md mb-1">{subject}</h3>
        <p className={`text-on-${color}-variant text-label-sm font-label-sm opacity-90`}>Teacher: {teacher}</p>
        <div className="mt-4 w-8 h-8 rounded-full overflow-hidden border border-white/30">
          <img className="w-full h-full object-cover" src={teacherImage} alt={`Teacher ${teacher}`} />
        </div>
        {progress && (
          <div className="mt-4">
            <ProgressBar progress={progress} color={`bg-${color}`} />
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';

export default function ProgressBar({ progress, color }) {
  return (
    <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
      <div
        className={`h-full ${color} rounded-full transition-all duration-300 ease-in-out`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

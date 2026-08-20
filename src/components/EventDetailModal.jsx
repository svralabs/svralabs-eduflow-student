import React from 'react';

export default function EventDetailModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface-container-lowest rounded-3xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline-md text-headline-md text-on-surface">{event.title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>{event.date} at {event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            <span>{event.location}</span>
          </div>
          <div className="text-on-surface font-body-md text-body-md">
            <p>{event.description}</p>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

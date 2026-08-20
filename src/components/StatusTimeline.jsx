import React from 'react';

const StatusTimeline = ({ status }) => {
  const steps = [
    { label: 'Order Masuk', completed: true },
    { label: 'Diproses', completed: true },
    { label: 'Barang Terbeli', completed: true },
    { label: 'Pembayaran', active: true },
    { label: 'Lunas', completed: false }
  ];

  return (
    <div className="relative pt-4 pb-2">
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center flex-1 relative">
              <div className={`w-6 h-6 rounded-full ${step.active ? 'bg-primary ring-4 ring-primary/20 active-glow' : step.completed ? 'bg-primary-container' : 'bg-surface-container-highest'} flex items-center justify-center z-10`}>
                {step.completed && !step.active ? (
                  <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                ) : step.active ? (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                ) : null}
              </div>
              <span className={`text-[10px] ${step.active ? 'text-primary font-bold' : 'text-on-surface-variant'} mt-2 text-center leading-tight`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`stepper-line ${step.completed ? 'bg-primary-container' : 'bg-surface-container-highest'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatusTimeline;

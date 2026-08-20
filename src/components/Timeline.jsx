const steps = [
  { id: 1, label: 'Order Masuk', status: 'done' },
  { id: 2, label: 'Diproses', status: 'done' },
  { id: 3, label: 'Barang Terbeli', status: 'done' },
  { id: 4, label: 'Pembayaran', status: 'active' },
  { id: 5, label: 'Lunas', status: 'pending' }
];

export default function Timeline() {
  return (
    <div className="relative pt-4 pb-2">
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center flex-1 relative">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                step.status === 'done' ? 'bg-primary-container' :
                step.status === 'active' ? 'bg-primary ring-4 ring-primary/20 active-glow' :
                'bg-surface-container-highest'
              }`}>
                {step.status === 'done' && (
                  <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                )}
                {step.status === 'active' && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className={`text-[10px] mt-2 text-center leading-tight ${
                step.status === 'active' ? 'text-primary font-bold' : 'text-on-surface-variant'
              }`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`stepper-line ${step.status === 'done' ? 'bg-primary-container' : 'bg-surface-container-highest'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

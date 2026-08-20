import React from 'react';

export default function TransactionItem({ item }) {
  return (
    <div className="bg-surface-container-lowest p-sm pr-md rounded-xl flex items-center gap-md custom-shadow border border-white">
      <img
        alt={item.name}
        className="w-20 h-20 rounded-lg object-cover bg-surface-container"
        src={item.image}
      />
      <div className="flex-1 space-y-1">
        <p className="font-label-lg text-on-surface">{item.name}</p>
        <div className="flex justify-between items-center">
          <p className="text-on-surface-variant text-body-md">Qty: {item.quantity}</p>
          <p className="font-headline-md text-on-primary-container">{item.price}</p>
        </div>
        <div className="flex items-center gap-1 text-tertiary">
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <span className="text-[12px] font-medium">Terbeli</span>
        </div>
      </div>
    </div>
  );
}

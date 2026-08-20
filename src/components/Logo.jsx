import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src="/logo.png" alt="SVRALABS Logo" className="h-8 w-auto" />
      <span className="text-xl font-bold text-gray-800">SVRALABS</span>
    </div>
  );
}

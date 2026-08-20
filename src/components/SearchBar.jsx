import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center gap-3 bg-surface-container-lowest rounded-full p-1.5 shadow-sm border border-outline-variant/30">
      <div className="flex-1 flex items-center pl-4 gap-3">
        <span className="material-symbols-outlined text-outline">search</span>
        <input
          className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline/70 font-body-base text-body-base"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <button className="bg-primary text-on-primary p-2.5 rounded-full flex items-center justify-center active:scale-90 transition-transform">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'opsz' 20" }}>tune</span>
      </button>
    </div>
  );
}

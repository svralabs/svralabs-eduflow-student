import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import UserDropdown from './UserDropdown';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/notifications"
              className="text-gray-500 hover:text-gray-700"
            >
              <span className="material-symbols-outlined">notifications</span>
            </Link>
            <UserDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const navItems = [
  { name: 'Dashboard', path: '/', icon: 'dashboard' },
  { name: 'Courses', path: '/courses', icon: 'school' },
  { name: 'Calendar', path: '/calendar', icon: 'calendar_month' },
  { name: 'Messages', path: '/messages', icon: 'mail' },
  { name: 'Settings', path: '/settings', icon: 'settings' },
];

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-16 left-4 z-20 p-2 rounded-md bg-white shadow-md"
        >
          <span className="material-symbols-outlined">
            {isSidebarOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-10 w-64 bg-white shadow-md transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 text-base font-normal rounded-lg ${
                      location.pathname === item.path
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <span className="material-symbols-outlined mr-3">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

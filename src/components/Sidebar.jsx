import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
  { name: 'Courses', icon: 'school', path: '/courses' },
  { name: 'Calendar', icon: 'calendar_month', path: '/calendar' },
  { name: 'Messages', icon: 'mail', path: '/messages' },
  { name: 'Grades', icon: 'grade', path: '/grades' },
  { name: 'Settings', icon: 'settings', path: '/settings' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={`bg-gray-800 text-white h-screen ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
      <div className="p-4 flex justify-between items-center">
        {!isCollapsed && <h1 className="text-2xl font-bold">EduFlow</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="material-symbols-outlined">{isCollapsed ? 'menu' : 'menu_open'}</span>
        </button>
      </div>
      <nav className="mt-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center p-4 hover:bg-gray-700 ${location.pathname === item.path ? 'bg-gray-900' : ''}`}
              >
                <span className="material-symbols-outlined mr-3">{item.icon}</span>
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

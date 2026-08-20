import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Home, Globe as BookOpen, Calendar, Settings, Heart, Star, ChevronLeft, ChevronRight} from 'lucide-react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Courses', icon: BookOpen, path: '/courses' },
    { name: 'Schedule', icon: Calendar, path: '/schedule' },
    { name: 'Favorites', icon: Heart, path: '/favorites' },
    { name: 'Ratings', icon: Star, path: '/ratings' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className={`bg-white dark:bg-gray-800 h-screen flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-4 flex justify-between items-center">
        {!isCollapsed && (
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">EduFlow</h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
              location.pathname === item.path
                ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {!isCollapsed && item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

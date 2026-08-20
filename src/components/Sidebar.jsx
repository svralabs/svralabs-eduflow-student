import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: 'dashboard', text: 'Dashboard' },
    { path: '/courses', icon: 'book', text: 'Courses' },
    { path: '/schedule', icon: 'calendar_month', text: 'Schedule' },
    { path: '/grades', icon: 'grade', text: 'Grades' },
    { path: '/messages', icon: 'mail', text: 'Messages' },
    { path: '/settings', icon: 'settings', text: 'Settings' },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.sidebarCollapsed : ''}`}>
      <div className={styles.sidebarHeader}>
        {!isCollapsed && <h2 className={styles.sidebarTitle}>Menu</h2>}
        <button onClick={toggleSidebar} className={styles.toggleButton}>
          <span className="material-symbols-outlined">
            {isCollapsed ? 'menu' : 'close'}
          </span>
        </button>
      </div>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
          >
            <span className={`material-symbols-outlined ${styles.navIcon}`}>
              {item.icon}
            </span>
            {!isCollapsed && <span className={styles.navText}>{item.text}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import styles from './Layout.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#3b82f6' }}>school</span>
        <span className={styles.logoText}>EduFlow</span>
      </div>
      <div className={styles.userMenu}>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User avatar"
          className={styles.userAvatar}
        />
        <span className={styles.userName}>Jane Doe</span>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </header>
  );
};

export default Header;

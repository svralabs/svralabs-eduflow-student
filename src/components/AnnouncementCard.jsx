import React from 'react';
import styles from '../pages/DashboardHome.module.css';

export default function AnnouncementCard({ announcement }) {
  return (
    <div className={styles.announcementCard}>
      <div className={styles.announcementIcon}>
        <span className="material-symbols-outlined">{announcement.icon}</span>
      </div>
      <div className={styles.announcementContent}>
        <h3 className={styles.announcementTitle}>{announcement.title}</h3>
        <p className={styles.announcementDescription}>{announcement.description}</p>
        <p className={styles.announcementDate}>{announcement.date}</p>
      </div>
    </div>
  );
}

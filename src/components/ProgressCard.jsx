import React from 'react';
import styles from '../pages/DashboardHome.module.css';

export default function ProgressCard({ progress }) {
  return (
    <div className={styles.progressCard}>
      <div className={styles.progressHeader}>
        <h3 className={styles.progressTitle}>{progress.title}</h3>
        <span className={styles.progressPercentage}>{progress.percentage}%</span>
      </div>
      <div className={styles.progressBarContainer}>
        <div
          className={`${styles.progressBar} ${progress.color}`}
          style={{ width: `${progress.percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

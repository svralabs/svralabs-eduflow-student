import React from 'react';
import AnnouncementCard from '../components/AnnouncementCard';
import ProgressCard from '../components/ProgressCard';
import { announcements, subjects, progressData } from '../mocks/dashboardHome';
import styles from './DashboardHome.module.css';

export default function DashboardHome() {
  return (
    <div className={styles.container}>
      {/* Top App Bar */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.profileImageContainer}>
            <img
              className={styles.profileImage}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbaVlS5vIMotgrFuZqYKufUUcCpEuGasl8ciHbdqaGdVeYla9jfYpfsVIT9dbeq-v1U2yYtAPIHUtsj_nIV7FA3eXfIG8FXw75LA-pornU4X212D8wcwZEAiiKp1FX-8uexdwp_u6Msy0BkOERxoTwmMYiUc41n4GCceDgT3E9Sseplv_O_yzZuIfARZb09JC_y5qGcXTsNzXeEYZlqFOM_jm5fIAfT5TLI04mJcIQ3pui29A6Hvg3w"
              alt="Anna Lane"
            />
          </div>
          <h1 className={styles.greeting}>Good morning, Anna Lane!</h1>
        </div>
        <button className={styles.notificationButton}>
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Filter Segmented Pill Row */}
      <nav className={styles.filterContainer}>
        <button className={styles.filterPill}>Forum</button>
        <button className={styles.filterPill}>Add. classes</button>
        <button className={`${styles.filterPill} ${styles.activePill}`}>Lessons</button>
      </nav>

      {/* Announcements Section */}
      <div className="mt-6">
        <h2 className="text-title-lg font-bold mb-4">Announcements</h2>
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </div>

      {/* Progress Section */}
      <div className="mt-6">
        <h2 className="text-title-lg font-bold mb-4">Your Progress</h2>
        {progressData.map((progress) => (
          <ProgressCard key={progress.id} progress={progress} />
        ))}
      </div>

      {/* Asymmetric Bento Grid for Subjects */}
      <div className={styles.subjectGrid}>
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className={`${styles.subjectCard} ${subject.color}`}
          >
            <div className={styles.subjectCardBlur}></div>
            <div className={styles.subjectCardHeader}>
              <div className={styles.subjectIconContainer}>
                <span className="material-symbols-outlined">{subject.icon}</span>
              </div>
            </div>
            <div>
              <h3 className={styles.subjectTitle}>{subject.name}</h3>
              <p className={styles.subjectTeacher}>{subject.teacher}</p>
              <div className={styles.teacherImageContainer}>
                <img
                  className={styles.teacherImage}
                  src={subject.teacherImage}
                  alt={subject.teacher}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import styles from './Layout.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 EduFlow. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
        <a href="/terms" className={styles.footerLink}>Terms of Service</a>
        <a href="/contact" className={styles.footerLink}>Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;

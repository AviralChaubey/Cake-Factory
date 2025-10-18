import React from 'react';
import styles from "../styles/Footer.module.css"; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p>We'd love to hear from you</p>
      </div>
      <div className={styles.footerInfo}>
        <p className={styles.brand}>
          <strong>CAKE FACTORY</strong>
        </p>
        <p>Copyright © 2025 CakeFactory</p>
        <p>All rights reserved</p>
        
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>

        {/* Email Subscription */}
        <p>Get Updates from us:</p>
        <input type="email" placeholder="Enter your email :)" className={styles.emailInput} />
      </div>
    </footer>
  );
};

export default Footer;
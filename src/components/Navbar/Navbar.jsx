// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
  // Toggle for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/" onClick={closeMobileMenu}>
            <span className={styles.logoIcon} aria-hidden="true">🧠</span>
            <span className={styles.logoText}>Awwtysm</span>
          </Link>
        </div>
        {/* Hamburger Menu Icon for Mobile */}
        <div className={styles.menuIcon} onClick={toggleMobileMenu} aria-label="Toggle navigation">
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>
        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/tasks" className={styles.navLink} onClick={closeMobileMenu}>
              Tasks
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/calm" className={styles.navLink} onClick={closeMobileMenu}>
              Calm
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/profile" className={styles.navLink} onClick={closeMobileMenu}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

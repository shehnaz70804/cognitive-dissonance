// src/pages/Home.jsx
import React from 'react';
import ProgressChart from '../components/ProgressChart/ProgressChart';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.welcomeSection}>
        <h1>Welcome to CASH: Dorikinantha Dochuko</h1>
        <p>
          Discover your personal progress and unlock a calmer, more focused mind.
          Our dashboard is designed specifically for individuals facing challenges with ADHD
          or cognitive dissonance—providing a visually engaging and interactive way to track your focus,
          celebrate your achievements, and find moments of calm.
        </p>
      </section>
      <section className={styles.chartSection}>
        <ProgressChart />
      </section>
    </div>
  );
};

export default Home;

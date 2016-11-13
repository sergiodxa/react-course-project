import React from 'react';
import { Link } from 'react-router';

import styles from './Header.css';


const header = (
  <header className={styles.header}>
    <h1 className={styles.title}>
      Mi primera app con React
    </h1>

    <nav role="navigation" className={styles.navigation}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <a
        href="https://github.com/sergiodxa/react-course-project"
        className={styles.link}
        target="_blank"
      >
        Github
      </a>
    </nav>
  </header>
);


export default header;

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link, IndexLink } from 'react-router';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return(
      <header>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <IndexLink to="/" className={styles.link} activeClassName={styles.active}>Home</IndexLink>
            </li>
            <li>
              <Link to="about" className={styles.link} activeClassName={styles.active}>About</Link>
            </li>
            <li>
              <Link to="resume" className={styles.link} activeClassName={styles.active}>Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link, IndexLink } from 'react-router';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return(
      <header>
        <nav className={styles.navigation}>
          <ul className={styles.menu}>
            <li>
              <IndexLink to="/" activeClassName={styles.current}>Home</IndexLink>
            </li>
            <li>
              <Link to="about" activeClassName={styles.current}>About</Link>
            </li>
            <li>
              <Link to="resume" activeClassName={styles.current}>Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

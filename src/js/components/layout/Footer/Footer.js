import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <a href="http://www.google.com">Google</a>
      </footer>
    )
  }
}

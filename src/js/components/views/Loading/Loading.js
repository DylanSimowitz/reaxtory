import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import styles from './Loading.css';

export default class Loading extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Spinner spinnerName="double-bounce" noFadeIn />
      </div>
    );
  }
}

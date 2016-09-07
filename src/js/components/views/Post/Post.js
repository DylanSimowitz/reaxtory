import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Posts from 'components/units/Posts';
import styles from './Post.css';

@observer
class Post extends Component {
  render() {
    return (
      <div>
        <h1>POST</h1>
      </div>
    );
  }
}

export default Post

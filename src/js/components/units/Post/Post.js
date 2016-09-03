import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    const {post} = this.props
    return (
      <div>
        <h3>{post.title.rendered}</h3>
      </div>
    );
  }
}

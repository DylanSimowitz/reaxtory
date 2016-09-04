import React, { Component } from 'react';
import Post from '../Post'

export default class Posts extends Component {
  render() {
    const {posts,className} = this.props
    return (
        <div className={className}>
          {
            posts.map(post => {
              return <Post key={post.id} post={post}/>
            })
          }
        </div>
    )
  }
}

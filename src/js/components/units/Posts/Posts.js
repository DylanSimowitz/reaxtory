import React, { Component } from 'react';
import Post from '../Post'

export default class Posts extends Component {
  render() {
    const {posts} = this.props
    return (
        <div>
          {
            posts.map(post => {
              return <Post key={post.id} post={post}/>
            })
          }
        </div>
    )
  }
}

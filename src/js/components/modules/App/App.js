import React, { Component } from 'react';
import wpapi from 'wpapi'

const wp = new wpapi({endpoint:'http://baxtory.dev/wp-json'})
// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    this.getPosts()
  }
  getPosts = () => {
    wp.posts().then(posts => {
      this.setState({
        posts
      })
    })
  }
  render() {
    const {posts} = this.state
    return (
      <ul>
        {
          posts.map(post => {
            return(
            <li key={post.id}>
              <div>
                <h3>{post.title.rendered}</h3>
                <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
              </div>
            </li>
          )
          })
        }
      </ul>
    );
  }
}

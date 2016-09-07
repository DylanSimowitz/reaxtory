import React,{ Component } from 'react';
import { inject, observer } from 'mobx-react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import browserHistory from 'react-router/lib/browserHistory';
import Layout from 'components/layout/Layout';
import Home from 'components/views/Home';
import About from 'components/views/About';
import Blog from 'components/views/Blog';
import Post from 'components/views/Post';

import fontAwesome from 'font-awesome/css/font-awesome.css';
import styles from './App.css';

class App extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="blog" component={Blog}>
            <Route path="/:slug" component={Post}/>
          </Route>
        </Route>
      </Router>
    )
  }
}

export default App

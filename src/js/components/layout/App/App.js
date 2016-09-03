import React,{ Component } from 'react';
import { observer } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from '../Layout';
import Home from 'components/views/Home';
import About from 'components/views/About';
import styles from './App.css';

export default class App extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
        </Route>
      </Router>
    )
  }
}

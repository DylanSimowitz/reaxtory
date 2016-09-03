import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Loading from 'components/views/Loading';
import Header from '../Header';
import Footer from '../Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './Layout.css';

@inject('uiStore','postStore') @observer
class Layout extends Component {
  render() {
    const {uiStore} = this.props;
    return(
      <div>
        <Header/>
        {
          uiStore.isLoading ?
          <Loading/> :
          <ReactCSSTransitionGroup transitionAppear={true} transitionName={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            leave: styles.leave,
            leaveActive: styles.leaveActive,
            appear: styles.enter,
            appearActive: styles.enterActive
          }} transitionAppearTimeout={2000} transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
          <div>
            {this.props.children}
          </div>
          </ReactCSSTransitionGroup>
        }
        <Footer/>
      </div>
    )
  }
}

export default Layout

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Loading from 'components/views/Loading';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
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
          // <ReactCSSTransitionGroup component="div" transitionName={{
          //   enter: styles.enter,
          //   enterActive: styles.enterActive,
          //   leave: styles.leave,
          //   leaveActive: styles.leaveActive,
          // }} transitionEnterTimeout={1000} transitionLeaveTimeout={500}>
          //   {React.cloneElement(this.props.children,{ key: this.props.location.pathname })}
          // </ReactCSSTransitionGroup>
          this.props.children
        }
        <Footer/>
      </div>
    )
  }
}

export default Layout

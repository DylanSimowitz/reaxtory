import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
import Posts from 'components/units/Posts';
import styles from './Blog.css';

@inject("postStore") @observer
class Blog extends Component {
  componentWillMount() {
    this.props.postStore.fetchPosts()
  }
  componentDidMount() {
    this.animateSVG()
  }
  animateSVG = () => {
    this.svg.animate([
      {transform: 'translateX(50px)'},
      {transform: 'translateX(0px)'}
    ], {
      easing: 'ease-out',
      duration: 1000,
      iterations: 1
    }
  )
  }
  render() {
    const {postStore} = this.props
    return (
      <div>
        <svg width="256px" height="256px" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid" ref={(c) => this.svg = c}>
          <g>
            <path d="M160.227,178.5186 L187.857,178.5186 L143.75,64.0486 L113.201,64.0486 L69.094,178.5186 L96.726,178.5186 L103.934,159.1286 L145.609,159.1286 L138.065,137.6726 L110.625,137.6726 L128.475,88.4186 L160.227,178.5186 Z M251.339,93.768 C250.357,90.232 246.705,88.155 243.154,89.141 C239.617,90.123 237.544,93.787 238.526,97.324 C241.299,107.309 242.704,117.63 242.704,128 C242.704,191.248 191.248,242.702 128,242.702 C64.752,242.702 13.297,191.248 13.297,128 C13.297,64.751 64.752,13.296 128,13.296 C154.793,13.296 180.718,22.814 201.179,39.752 C200.383,41.652 199.941,43.737 199.941,45.925 C199.941,54.76 207.103,61.922 215.938,61.922 C224.773,61.922 231.935,54.76 231.935,45.925 C231.935,37.09 224.773,29.928 215.938,29.928 C214.237,29.928 212.6,30.199 211.062,30.691 C188.022,11.056 158.513,0 128,0 C57.421,0 0,57.42 0,128 C0,198.579 57.421,255.999 128,255.999 C198.579,255.999 256,198.579 256,128 C256,116.428 254.433,104.91 251.339,93.768 Z" fill="#112B49"/>
          </g>
        </svg>
        <Posts posts={postStore.posts} className={styles.posts}/>
      </div>
    );
  }
}

export default Blog

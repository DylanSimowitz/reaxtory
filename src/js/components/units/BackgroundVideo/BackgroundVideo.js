import React, { Component } from 'react';

export default class BackgroundVideo extends Component {
  render() {
    const videoProps = {
      autoPlay: this.props.autoPlay,
      loop: this.props.loop,
      muted: this.props.muted,
      poster: this.props.poster,
      preload: this.props.preload
    }
    return (
      <video {...videoProps} width="100%" height="100%">
        <source src={this.props.src} type="video/mp4"/>
      </video>
    );
  }
}
BackgroundVideo.defaultProps = {
  autoPlay: true,
  loop: true,
  muted: true
}

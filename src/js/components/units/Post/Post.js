import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'components/units/FontAwesome';
import styles from './Post.css';

export default class Post extends Component {
  icons = {
    1: 'question-circle-o',
    2: 'arrow-circle-o-up'
  }
  getDay(date) {
    return date.toLocaleString('en-us', {day: 'numeric'})
  }
  getMonth(date) {
    return date.toLocaleString('en-us', {month: 'short'})
  }
  render() {
    const {post} = this.props
    const date = new Date(post.date)
    let featuredImage;
    if (post.better_featured_image) {
      featuredImage = post.better_featured_image
    }
    return (
      <figure className={styles.post}>
      {
        featuredImage &&
        <img src={featuredImage.source_url} alt={featuredImage.alt_text} />
      }
        <div className={styles.date}><span className={styles.day}>{this.getDay(date)}</span><span className={styles.month}>{this.getMonth(date)}</span></div>
        <figcaption>
          <h3>{post.title.rendered}</h3>
          <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
        </figcaption>
        <div className={styles.hover}>
          <FontAwesome icon={this.icons[post.categories[0]]} />
        </div>
        <a href={post.link}></a>
    </figure>
    );
  }
}

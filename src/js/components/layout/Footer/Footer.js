import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import FontAwesome from 'components/units/FontAwesome';
import styles from './Footer.css';

@inject('uiStore')@observer
class Footer extends Component {
  render() {
    const {uiStore} = this.props
    return (
      <footer>
        <h2>Contact Us</h2>
        <p>Ready to get started on your next project?</p>
        <p>Contact us and we will be more than happy to assist you.</p>
        <div className="col">
          <h3>Our office</h3>
          <div>
            <FontAwesome icon="phone"/>
            <a href={`phone:${uiStore.contact.phone_number}`}>{uiStore.contact.phone_number}</a>
          </div>
          <div>
            <FontAwesome icon="envelope"/>
            <a href={`mailto:${uiStore.contact.email}`}>{uiStore.contact.email}</a>
          </div>
          <div>
            <FontAwesome icon="map-marker"/>
            <span>{uiStore.contact.address}</span>
          </div>
        </div>
        <div className="col">
          <h3>H</h3>
          <form action="" method="get" id="contact_form">
            <input type="text" name="wish" id="wish" value="" className="wish"/>
            <input type="text" name="firstname" id="firstname" placeholder="Name" value=""/>
            <input type="text" name="telephone" id="telephone" placeholder="Telephone" value=""/>
            <input type="text" name="email" id="email" placeholder="Email" value=""/>
            <textarea cols="1" rows="1" name="comment" id="comment" placeholder="Comment"></textarea>
            <button>Submit</button>
          </form>
        </div>
        <div className="social">
          <h3>Keep connected</h3>
          <FontAwesome icon="twitter"/>
          <a href={`http://twitter.com/${uiStore.contact.twitter}`} target="_blank">
            Twitter
          </a>
          <FontAwesome icon="facebook-official"/>
          <a href={`http://facebook.com/${uiStore.contact.facebook}`} target="_blank">
            Facebook
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer

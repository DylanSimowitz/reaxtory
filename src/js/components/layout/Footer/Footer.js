import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    return(
      <footer>

		<h2>Contact Us</h2>

		<p>Do you have a project you would like us to work on? Or perhaps a few questions?</p>

		<p>Contact us and we will be more than happy to assist you.</p>

		<div className="col">

			<h3>Our office</h3>

			<p className="phone">
				{/* <img src="images/phone.svg" alt=""/> */}
				+27 21 480 0430
			</p>

			<p>
				<a href="mailto:info@ninjasforhire.co.za">info@ninjasforhire.co.za</a><br/>
				Ninjas for Hire
			</p>

			<p>
				34 Bree Street<br/>
				12th Floor, The Terraces<br/>
				Cape Town<br/>
				8000
			</p>

		</div>
		<div className="col">

			<h3>Say hello</h3>

			<div className="error"></div>

			<form action="" method="get" id="contact_form">

				<input type="text" name="wish" id="wish" value="" className="wish"/>

				<input type="text" name="firstname" id="firstname" placeholder="Name" value=""/>

				<input type="text" name="telephone" id="telephone" placeholder="Telephone" value=""/>

				<input type="text" name="email" id="email" placeholder="Email" value=""/>

				<textarea cols="1" rows="1" name="comment" id="comment" placeholder="Comment"></textarea>

				<button>Submit</button>
				{/* <img src="images/loader.svg" alt="" className="loader"/> */}

			</form>

			<div className="clearboth"></div>

		</div>
		<div className="social">

			<h3>Keep connected</h3>

			<a href="http://twitter.com/ninjasforhire" target="_blank">
				{/* <img src="images/icon-tw.svg" alt=""/> */}
				Twitter
			</a>
			<a href="http://www.facebook.com/pages/Ninjas-for-Hire/168474703234076" target="_blank">
				{/* <img src="images/icon-fb.svg" alt=""/> */}
				Facebook
			</a>

		</div>
		<div className="clearboth"></div>
      </footer>
    )
  }
}

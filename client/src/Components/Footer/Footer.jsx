import React from 'react'
import "./Footer.css"

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="contact-info">
					<h5>Contact Us</h5>
					<ul>
						<li>Email: example@email.com</li>
						<li>Phone: (123) 456-7890</li>
						<li>Address: 123 Main St, City, Country</li>
					</ul>
				</div>
				<div className="useful_Links">
					<h5>Useful Links</h5>
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Media</li>
					</ul>
				</div>
				<div className="about">
					<h5>24 Hours Service</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
						justo vel nisl vehicula elementum sit amet eget tortor.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
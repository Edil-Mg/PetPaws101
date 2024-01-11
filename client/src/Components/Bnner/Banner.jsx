import React from "react";
import "./Banner.css";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import puppy1 from "../../resource/image/puppy1.jpg";
import Home from "../Home/Home";
import pupps from "../../assets/images/doggies.jpg";

function Banner() {
	return (
		<>
			<Nav />
			<div className="banner">
				<div className="banner__content">
					<h1>Welcome to Our Happy Paw's shelter/daycare</h1>
					<h5>When you get away, we will takecare of your furry family!</h5>
				</div>
			</div>
			<br />
			<br />
			
			<Home
				title="Welcome to Our Store"
				image="http://azim.commonsupport.com/Poopet/images/resource/news-3.png"
				alt="Image 1"
				altText="Product Image"
				productTitle="Why choose us"
				productDescription="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				productDescription2="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			/>
			<br />
			<br />
			<div className="banner2">
				<div className="banner__content2">
					<ul>
						<Link to="/SignUp" className="find">
							<li>Enroll</li>
						</Link>
						<Link to="/SignUp" className="get">
							<li>Get involved</li>
						</Link>
						<Link to="/MakeAppointment" className="make">
							<li>Make an appointment</li>
						</Link>
					</ul>
				</div>
			</div>
			<div className="lower_container">
				<div className="banner-des">
					<h2>OUR MISSION</h2>
					<p>
						We prioritize belly rubs and are committed to ensuring your furry
						friend feels comfortable, content, and secure while under our care.
						Our aim is to provide top-notch care at an affordable price,
						catering to various needs and budgets. Regardless of how frequently
						your dog(s) visit, they are guaranteed to depart happily worn out
						from a day filled with enjoyable K9 and human interactions.{" "}
					</p>
					<p>
						Our emphasis lies in promoting positive socialization, along with
						offering both physical and mental stimulation through activities
						like basic obedience and agility.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Banner;

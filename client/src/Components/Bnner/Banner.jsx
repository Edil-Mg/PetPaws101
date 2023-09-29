import React from 'react'
import "./Banner.css"
import Nav from '../NavBar/Nav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import puppy1 from "../../resource/image/puppy1.jpg"
import Home from '../Home/Home';



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
			{/* <Home
				title="Welcome to Our Store"
				image={puppy1}
				alt="Image 1"
				altText="Product Image"
				productTitle="Our story"
				productDescription="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
			/> */}
			<Home
				title="Welcome to Our Store"
				image="http://azim.commonsupport.com/Poopet/images/resource/news-3.png"
				alt="Image 1"
				altText="Product Image"
				productTitle="Why choose us"
				productDescription="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
			/>
			<div className="lower_container">
				<br />
				<Link to="/SignUp" className="find">
					Find your furry family
				</Link>
				<Link to="/SignUp" className="get">
					Get involved
				</Link>
				<Link to="/MakeAppointment" className="make">
					Make an appointment
				</Link>
				<br />
			</div>
			<Footer />
		</>
	);
}

export default Banner
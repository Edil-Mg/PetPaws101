
import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function HomePage(props) {
	const { image, altText, productTitle, productDescription, productDescription2, isReverse } = props;

	return (
		<div className={`homePage ${isReverse ? "reverse" : ""}`}>
			<div className="container">
				<div className="row">
					<div
						className={`col-md-5 p-2 d-flex ${isReverse ? "order-md-2" : ""}`}
					>
						<img src={image} alt={altText} className="img-fluid" />
					</div>
					<div
						className={`col-md-5 text-black title ${
							isReverse ? "order-md-1" : "order-md-2"
						}`}
					>
						<h3>{productTitle}</h3>
						<p>{productDescription}</p>
						<p>{productDescription2}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage; 
      
   
      















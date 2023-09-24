
import React from "react";
import "./Homepage.css";
// import { Link } from "react-router-dom";

function HomePage(props) {
	return (
		<div className="homePage">
			<div className="container">
				<div className="row">
					<div className="col-md-4 p-2 d-flex">
						<img src={props.image} alt={props.altText} className="img-fluid" />
					</div>
					<div className="col-md-8 text-black title">
						<h3>{props.productTitle}</h3>
						<p>{props.productDescription}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;


// import React from "react";
// import "./Homepage.css";

// function HomePage(props) {
// 	return (
// 		<div className="homePage">
// 			<div className="container">
// 				<div className="row">
// 					<div className="image__one col-md-4 p-2 d-flex">
// 						<img src={props.image} alt={props.altText} className="img-fluid" />
// 					</div>
// 					<div className="row2">
// 						<h3>{props.productTitle}</h3>
// 						<p>{props.productDescription}</p>
// 					</div>
					
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default HomePage;










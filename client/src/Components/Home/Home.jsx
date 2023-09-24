// import React from "react";
// import "./home.css";


// function Home(props) {
// 	return (
// 		<div className="home">
// 			<div className="container1">
// 				<div className="row1">
// 					<div className="col-md-8">
// 						<h3>{props.productTitle}</h3>
// 						<p>{props.productDescription}</p>
// 					</div>
// 					<div className="col-md-4 p-2 d-flex">
// 						<img src={props.image} alt={props.altText} className="img-fluid1" />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Home;

import React from "react";
import "./home.css"; // Import your custom CSS file

function Home(props) {
	return (
		<div className="home">
			<div className="container1 mx-auto text-center">
				{" "}
				{/* Center the entire container */}
				<div className="row1">
					<div className="col-md-8">
						<h3>{props.productTitle}</h3>
						<p>{props.productDescription}</p>
					</div>
					<div className="col-md-4 p-2 d-flex">
						<img
							src={props.image}
							alt={props.altText}
							className="img-fluid1 custom-width"
						/>{" "}
						{/* Apply custom width */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;


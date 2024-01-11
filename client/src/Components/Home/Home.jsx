import React from "react";
import "./home.css"; 

function Home(props) {
	return (
		<div className="home">
			<div className="container1 mx-auto text-center">
				{" "}
				
				<div className="row1">
					<div className="col-md-8">
						<h3>{props.productTitle}</h3>
						<p>{props.productDescription}</p>
						<p>{props.productDescription2}</p>
					</div>
					<div className="col-md-4 p-2 d-flex">
						<img
							src={props.image}
							alt={props.altText}
							className="img-fluid1 custom-width"
						/>{" "}
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;


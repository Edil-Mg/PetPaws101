import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg ">
				<img src=""></img>
				<Link className="navbar-brand text-white" to="/">
					Pet Paws
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link text-white" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/about">
								About
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link text-white" to="/login">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/signUp">
								Sign in
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Nav;

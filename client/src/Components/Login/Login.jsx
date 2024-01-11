import React, { useState } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Login() {
	
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	function handleSubmit(event) {
		event.preventDefault();
		const loginData = {
			email: emailAddress,
			password: password,
		};
		console.log(loginData);
		const apiUrl = "http://localhost:4001/login";
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(loginData),
		};
		const response = fetch(apiUrl, requestOptions);
		
		response
			.then((res) => res.json())
			.then((data) => {
				setResponseMessage(data.message);
				if (data.status === "success") {
					// Redirect the user to the home page after 5 seconds
					// setTimeout(() => {
					//   window.location.href = "/";
					// }, 5000);
				}
			})
			.catch((error) => console.log(error));
	}

	return (
		<>
			<Nav />
			<div>
				
				<div className="notice text-danger">
					<h2>{responseMessage}</h2>
				</div>
				<h1>Login </h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">Email:</label>
					<br />
					<input
						type="text"
						id="email"
						name="email"
						value={emailAddress}
						onChange={(event) => setEmailAddress(event.target.value)}
					/>
					<br />
					<label htmlFor="password">Password:</label>
					<br />
					<input
						type="text"
						id="password"
						name="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<br />
					<br />
					<input type="submit" value="Submit" />
					<div className="donthave_acct">
						<p>Don't have an account?</p>
						<Link to="/signup">
							<p>Sign up here</p>
						</Link>
					</div>
				</form>
			</div>
			<br />
			<br />
			<Footer />
		</>
	);
}

export default Login;

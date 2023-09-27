// import React, { useState } from "react";
// import "./signUp.css";
// import Nav from "../NavBar/Nav";
// import Footer from "../Footer/Footer";

// function SignUp() {
// 	const [formData, setFormData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		password: "",
// 		confirmPassword: "",
// 	});

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({
// 			...formData,
// 			[name]: value,
// 		});
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 	};

// 	return (
// 		<>
// 			<Nav />
// 			<div className="signUp-card">
// 				<h2>Sign up</h2>
// 				<form onSubmit={handleSubmit}>
// 					<div>
// 						<label htmlFor="firstName"></label>
// 						<input
// 							type="text"
// 							id="firstName"
// 							name="firstName"
// 							value={formData.firstName}
// 							onChange={handleChange}
// 							required
// 							placeholder="First Name"
// 						/>
// 					</div>
// 					<br />
// 					<div>
// 						<label htmlFor="lastName"></label>
// 						<input
// 							type="text"
// 							id="lastName"
// 							name="lastName"
// 							value={formData.lastName}
// 							onChange={handleChange}
// 							required
// 							placeholder="Last Name"
// 						/>
// 					</div>
// 					<br />
// 					<div>
// 						<label htmlFor="email"></label>
// 						<input
// 							type="email"
// 							id="email"
// 							name="email"
// 							value={formData.email}
// 							onChange={handleChange}
// 							required
// 							placeholder="Email"
// 						/>
// 					</div>
// 					<br />
// 					<div>
// 						<label htmlFor="password"></label>
// 						<input
// 							type="password"
// 							id="password"
// 							name="password"
// 							value={formData.password}
// 							onChange={handleChange}
// 							required
// 							placeholder="Password"
// 						/>
// 					</div>
// 					<br />
// 					<div>
// 						<label htmlFor="confirmPassword"></label>
// 						<input
// 							type="password"
// 							id="confirmPassword"
// 							name="confirmPassword"
// 							value={formData.confirmPassword}
// 							onChange={handleChange}
// 							required
// 							placeholder="Confirm Password"
// 						/>
// 					</div>
// 					<br />
// 					<div>
// 						<button type="submit">Submit</button>
// 					</div >
// 					<br/>
// 					<div className="have_accout"><p>Have an account?</p> <a href="#" className="logIn">Log in</a></div>
// 				</form>
// 			</div>
// 			<Footer />
// 		</>
// 	);
// }

// export default SignUp;


// Import useState from react
import React, { useState } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function SignUp(props) {
	// Declare state variables for each of the form fields
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

		const [responseMessage, setResponseMessage] = useState("");
		const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	// Write a function to handle the form submission
	function handleSubmit(event) {
		// Prevent the default behaviour of the form submission
		event.preventDefault();
		// Prepare the data to be sent to the server
		const data = {
			first_name: firstName,
			last_name: lastName,
			email: emailAddress,
			password: password,
			confirm_password: confirmPassword, 
		};

		// Send the data to the server
		const apiUrl = "http://localhost:4001/signup"; 

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};
		
    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResponseMessage(data.message);
        if (data.status === "success") {
          setShowSuccessMessage(true);
        }
      })
      .catch((error) => console.log(error));
  }

	return (
		<>
			<Nav />
			<div>
				
				{showSuccessMessage ? (
					<div className="success-message">
						<h2>You have signed up successfully</h2>
					</div>
				) : null}

				<h1>Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="fname">First name:</label>
					<br />
					<input
						type="text"
						id="fname"
						name="fname"
						value={firstName}
						onChange={(event) => setFirstName(event.target.value)}
					/>
					<br />
					<label htmlFor="lname">Last name:</label>
					<br />
					<input
						type="text"
						id="lname"
						name="lname"
						value={lastName}
						onChange={(event) => setLastName(event.target.value)}
					/>
					<br />
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
					<label htmlFor="confirmpassword">Confirm Password:</label>
					<br />
					<input
						type="text"
						id="confirmpassword"
						name="confirmpassword"
						value={confirmPassword}
						required
						// placeholder="Confirm Password"
						onChange={(event) => setConfirmPassword(event.target.value)}
					/>
					<br />
					<br />
					<input type="submit" value="Submit" />
					<div className="have_accout">
						<p>Have an account?</p>{" "}
						<Link to="/login" className="logIn">
							Log in
						</Link>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
}

export default SignUp;





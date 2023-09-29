import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";


function MakeAppt() {
	// Define state variables to store appointment information
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// You can access the name, date, and time values here for further processing
		console.log("Name:", name);
		console.log("Date:", date);
		console.log("Time:", time);
		// You can send this information to your backend or perform any other actions as needed
	};

	return (
		<div>
      <Nav /><br/>
			<h1>Make an appointment</h1><br />
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div><br/>
				<div>
					<label htmlFor="date">Date:</label>
					<input
						type="date"
						id="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</div><br/>
				<div>
					<label htmlFor="time">Time:</label>
					<input
						type="time"
						id="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
						required
					/>
				</div><br/>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
      <Footer />
		</div>
	);
}

export default MakeAppt;

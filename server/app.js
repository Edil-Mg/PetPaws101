// Import the dotenv module and call the config()
require('dotenv').config();
// Import the express module
const express = require("express");
// Create the express app
const app = express();
// Use the express.json() middleware to parse the request body
app.use(express.json());
// Import the login route
const loginRoute = require('./routes/login.routes');
// Add the login router to the middleware chain
app.use(loginRoute);


const createTableSQL = `
  CREATE TABLE IF NOT EXISTS sign_up (
    id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    confirm_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (email)
  )
`;

const createUserLoginTableSQL = `
  CREATE TABLE IF NOT EXISTS user_login (
    id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES sign_up(id) ON DELETE CASCADE
  )
`;

// connection.query(createTableSQL, function (err, result) {
// 	if (err) throw err;
// 	console.log("sign_up table created or already exists.");
// });
// connection.query(createUserLoginTableSQL, function (err, result) {
// 	if (err) throw err;
// 	console.log("user_login table created or already exists.");
// });


// Allow CORS to all
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});
// Create a simple get request handler to send a response back
app.get("/", (req, res) => {
	res.send("Testing!");
});
// Post request handler to add a new employee to the database
app.post("/signup", (req, res) => {
	// console.log(req.body);
	// Write the sql query to add to the database table named sign_up
	const sql = `INSERT INTO sign_up (first_name, last_name, email, password, confirm_password) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.password}', '${req.body.confirm_password}')`;
	// Execute the query
	connection.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 user inserted");
	});
	// Send a response back to the client
	const response = {
		status: "success",
		message: "user added succesfully",
	};
	res.status(200).json(response);
});



// Post request handler to login an user which comes to this route /login
// app.post("/login", (req, res) => {
// 	console.log(req.body);
// 	// Write the sql query to retrieve the user with the email and password provided by the user and compare it with the data in the database
// 	const sql = `SELECT * FROM sign_up WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
// 	// Execute the query
// 	connection.query(sql, function (err, result) {
// 		if (err) throw err;
// 		console.log(result);
// 		// Check if the result is empty or not
// 		if (result.length > 0) {
// 			// Send a response back to the client
// 			const response = {
// 				status: "success",
// 				message: "Login successful",
// 			};
// 			res.status(200).json(response);
// 		} else {
// 			// Send a response back to the client
// 			const response = {
// 				status: "failure",
// 				message: "Login failed",
// 			};
// 			res.status(200).json(response);
// 		}
// 	});
// });

// Get the port from the environment variable
const port = process.env.PORT
// Set up the listener
app.listen(port, () => console.log(`Listening on port ${port}`));

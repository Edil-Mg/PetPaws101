// Import the db connection file
const connection = require("../config/db.config");
// A function to handle the add employee request
async function addUser(userData) {
	try {
		// Write the sql query to add an employee to the database
		const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES ('${userData.first_name}', '${userData.last_name}', '${userData.email}', '${userData.password}')`;
		// Execute the query
		const result = await connection.query(sql);
		console.log(result);
		// If the query returns a result, return the result. Otherwise, return null
		if (result.insertId) {
			// Get the newly inserted ID
			const insertedId = result.insertId;
			return insertedId;
		} else {
			return null;
		}
	} catch (err) {
		// Log the error to the console
		console.error("An error occurred:", err);
		return null;
	}
}

// Export the function
module.exports = {
	addUser,
};

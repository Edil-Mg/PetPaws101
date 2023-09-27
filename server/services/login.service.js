// Import the db connection file
const connection = require('../config/db.config');
// Afunction to handle the login request
async function logIn(userData) {
    try{
        console.log("Inside login service");
        console.log(userData);
        	const sql = `SELECT * FROM signup WHERE email = '${userData.email}' AND password = '${userData.password}'`;
    // Execute the query
        const result = await connection.query(sql);
        console.log(result)
		// If the query returns a result, return the result. Otherwise, resturns null
		if (result.length > 0) {
			return result;
		} else {
            return null;
		}
    } catch (err) {
        // Log the error to the console
        console.error('An error occurred:', )
    }
};
// Export the function
module.exports = {
	logIn,
};
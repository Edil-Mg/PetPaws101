const connection = require('../config/db.config');

async function logIn(userData) {
    try{
        console.log("Inside login service");
        console.log(userData);
        	const sql = `SELECT * FROM signup WHERE email = '${userData.email}' AND password = '${userData.password}'`;
    
        const result = await connection.query(sql);
        console.log(result)
		
		if (result.length > 0) {
			return result;
		} else {
            return null;
		}
    } catch (err) {
        console.error('An error occurred:', )
    }
};

module.exports = {
	logIn,
};
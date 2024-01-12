const signupService = require("../services/signup.service");

async function signUp(req, res) {
	console.log(req.body);
	// Call the employee service to add an employee to the database
	const userAdded = await signupService.signUp(req.body);
	// If the employee is added successfully, return success response. Otherwise, return failure response
	console.log(userAdded);
	if (userAdded) {
		const response = {
			status: "success",
			message: "Employee added successfully",
		};
		res.status(200).json(response);
	} else {
		const response = {
			status: "failure",
			message: "Employee could not be added",
		};
		res.status(403).json(response);
	}
}

module.exports = {
	signUp,
};

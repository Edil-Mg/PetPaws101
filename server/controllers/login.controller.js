// Import the login service
const loginService = require("../services/login.service");

// A function to handle the login request
async function logIn(req, res, next) {
    console.log(req.body);
    // Call the login service to check if the user exists in the userData
    const user = await loginService.logIn(req.body);
    // If the user exists and the password matches, resturn success response. Otherwise, resturn failure response
    if (user) {
        const response = {
            status: 'success',
            message: 'Logged in successfully!'
        }
        res.status(200).json(response);
    }else {
        // Send a failur response back to the client
        const response = {
            status: 'failure',
            message: 'Acess denied',
        };
        res.status(403).json(response)
    }
};
// Export the function
module.exports = {
    logIn
}
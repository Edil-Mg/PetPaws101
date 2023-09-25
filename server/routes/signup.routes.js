// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
// Import the user controller
const signupController = require("../controllers/signup.controller");
// Create a post request handler for the add user route
router.post("/signup", signupController.signUp);
// Export the router
module.exports = router;

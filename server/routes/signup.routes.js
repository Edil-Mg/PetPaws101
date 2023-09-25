// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
// Import the employee controller
const userController = require("../controllers/employee.controller");
// Create a post request handler for the add employee route
router.post("/add-employee", userController.addUser);
// Export the router
module.exports = router;

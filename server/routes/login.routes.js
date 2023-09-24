// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
// Import the login controller
const loginController = require("../controllers/login.controller");
//Pass the login request to the login controller
router.post("/login", loginController.logIn);
module.exports=router;

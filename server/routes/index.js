const express = require("express");
const router = express.Router(); 
const loginRouter = require("./login.routes");
const signupRouter = require("./signup.routes");
const installRouter = require("./install.routes");
const appointmentRouter = require("./appointment.router");

// Add the login routers to the middleware chain
router.use(loginRouter);
router.use(signupRouter);
router.use(installRouter);
router.use(appointmentRouter);

module.exports = router;

const express = require("express");
const router = express.Router();
const installControllers = require("../controllers/install.controller");
router.get("/install", installControllers.installDirectFromApi);

module.exports = router;

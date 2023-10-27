// Import the appointment service
const appointmentService = require("../services/appointment.service");

// A function to handle the appointment request
async function appointment(req, res, next) {
	console.log(req.body);
}

module.exports = {
	appointment,
};

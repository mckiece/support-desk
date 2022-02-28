const express = require("express");
const {
	getTickets,
	createTicket,
	getTicket,
} = require("../controllers/ticketController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTicket);

router.route("/:id").get(protect, getTicket);

module.exports = router;

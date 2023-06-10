
const express = require('express');
const router = express.Router();

const bookingControllers = require('../controllers/user');

router.post('/add-user',bookingControllers.postBooking);

router.get('/get-user',bookingControllers.getBookings);

router.delete('/delete-user/:id',bookingControllers.deleteBooking);

router.put('/edit-user/:id',bookingControllers.editBooking);

module.exports = router;
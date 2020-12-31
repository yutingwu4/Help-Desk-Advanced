const express = require('express');

const { setTicket, getTickets, resolveTicket } = require('./controller');

const { createUser, verifyUser } = require('./userController');

const router = express.Router();



router.post('/newTicket', setTicket); //create new ticket

router.get('/getTickets', getTickets); //get all tickets to display

router.patch('/resolveTicket', resolveTicket); //changes status to resolved, this will handle the notes the fellow adds on the ticket once resolved

//routes for users
//verify user
router.post('/verify', verifyUser, (req, res) => { res.status(200).json(res.locals.user) })
//create user
router.post('/create', createUser, (req, res) => { res.status(200).json('User successfully created') });



module.exports = router;

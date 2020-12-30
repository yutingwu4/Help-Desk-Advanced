const express = require('express');
const router = express.Router();
const { createUser, verifyUser } = require('./userController');


//verify user
router.get('/verify', verifyUser, (req, res) => { res.status(200).json(res.locals.user) })

//verify authorization


//create user
router.post('/create', createUser, (req, res) => { res.status(200).json('User successfully created') });


module.exports = router;
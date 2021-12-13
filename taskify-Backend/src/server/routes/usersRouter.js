const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/usersController');

router.get('/getusers', usersController.getUsers);
router.post('/register', passport.authenticate('register'), usersController.register);
router.post('/login', passport.authenticate('login'), usersController.SignIn);
router.get('/login', usersController.showLog);
router.get('/logout', usersController.logOut)

module.exports = router;
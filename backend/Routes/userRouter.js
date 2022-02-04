const express = require ('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/signup').post(userController.userSignup);
router.route('/login').post(userController.userLogin);


module.exports = router;  
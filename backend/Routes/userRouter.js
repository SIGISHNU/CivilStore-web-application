const express = require ('express');
const userController = require('../controllers/userController');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const router = express.Router();


router.route('/signup').post(userController.userSignup);
router.route('/login').post(userController.userLogin);
router.route('/profilepic').post(upload.single("profilepic"),userController.changeProfilePic)


module.exports = router;    
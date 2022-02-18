const db = require("../Config/connection");
const collection = require("../Config/collections");
const bcrypt = require("bcrypt");
const {uploadFile} = require('../s3')
const multer = require('multer')
const upload = multer().single('profilepic')

module.exports = {

  userSignup: async (req, res) => {
    var userData = req.body;

    if(userData.email.length === 0 || userData.password.length === 0 || userData.name.length === 0 ||
      userData.mobile.length === 0 ||  userData.place.length === 0 ||  userData.landmark.length === 0 ||
      userData.pincode.length === 0){
      res.status(400).json(false)
    }else{

    const userExist = await db
      .get()
      .collection(collection.USER_COLLECTION)
      .findOne({ email: userData.email });
    console.log(userExist);
    if (userExist) {
      res.status(200).json({
        message: "User already exist ....",
      });
    } else {
      userData.password = await bcrypt.hash(
        userData.password,
        10
      );
      const createUser = await db
        .get()
        .collection(collection.USER_COLLECTION)
        .insertOne(userData)
        .then((response) => {
          res.status(200).json({
            response,
          });
        });

      }
    }
},

    userLogin: async (req, res) => {

      var loginData = req.body;
    
      if(loginData.email.length === 0 || loginData.password.length === 0){
        res.status(400).json(false)
      }else{
      const user = await db
        .get()
        .collection(collection.USER_COLLECTION)
        .findOne({ email: loginData.email });

      if (user) {
        bcrypt
          .compare(loginData.password, user.password)
          .then((response) => {
            if (response) {
              res.status(200).json({
                user,
              });
             
            } else {
              console.log("login failed ...");
              res.status(400).json({
                message:"Password not match...!"
              });
            }
          });
      } else {
        console.log("login failed ...");
        res.status(400).json({
          message:"User not exist...!"
        });
      }

    }
    },

    changeProfilePic:async(req,res)=>
    {
      
      let pic = req.file;
      const result = await uploadFile(pic)
      console.log("result",result);
      res.send({imagePath:`${result.Key}`})
      
    }

    

  
};

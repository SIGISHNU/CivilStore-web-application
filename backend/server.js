const express = require ('express');
const dotenv = require ('dotenv');
const userRouter = require ('./Routes/userRouter');
const db = require ('./Config/connection');
//multer is for image upload
const multer = require('multer');
const upload = multer({ dest:'uploads/' })

//imported from s3
// const {uploadFile, getFileStream} = require("./s3")

const app = express();
dotenv.config();
app.use(express.json());

db.connect((err)=>{
    if(err) console.log("connection err");
    else console.log('Database connected successfully ...');
})


//for users
app.use('/users' ,userRouter);


//image download
// app.get('/image/:key',(req,res)=>{
//     const Key = req.params.key
//     const readStream = getFileStream(key)

//     readStream.pipe(res)
// })

//image upload
// app.post('/image',upload.single('image'),async(req,res)=>{

//     const file = req.file
//    let uploadResult = await uploadFile(file)
    
//    console.log(uploadResult);
// //    res.send({imagePath:`${uploadResult.Key}`})
// })

app.listen(process.env.PORT , console.log(`Server started on PORT ${process.env.PORT}`));
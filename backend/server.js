const express = require ('express');
const dotenv = require ('dotenv');
const userRouter = require ('./Routes/userRouter');
const db = require ('./Config/connection');

const app = express();
dotenv.config();
app.use(express.json());

db.connect((err)=>{
    if(err) console.log("connection err");
    else console.log('Database connected successfully ...');
})


app.use('/users' ,userRouter);

app.listen(process.env.PORT , console.log(`Server started on PORT ${process.env.PORT}`));
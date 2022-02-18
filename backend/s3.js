const dotenv =require('dotenv')
const S3 = require('aws-sdk/clients/s3')
let fs =  require('fs');


dotenv.config();

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretKey
})

//upload a file to s3

async function uploadFile(file){


    const fileStream = fs.createReadStream(file.path)
    console.log("file.path",file.path);
    console.log(bucketName);
    console.log(fileStream);
    console.log(file.filename);
    
    const uploadParams = {
        Bucket:bucketName,
        Body:fileStream,
        Key:file.filename
    }

    return await s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile


//download a file from s3

function getFileStream(fileKey){
    const downloadParams = {
        key:fileKey,
        Bucket:bucketName
    }

    return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream
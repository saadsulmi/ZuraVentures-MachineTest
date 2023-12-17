const { S3Client,PutObjectCommand, ListObjectsV2Command,GetObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()

const accessKeyId=process.env.ACCESS_KEY
const secretKeyId=process.env.SECRET_KEY
const bucketName = process.env.BUCKET
const region = process.env.REGION

const s3= new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey: secretKeyId,
    },
});

const uploadBotIcon = async(file,userId)=>{
    try {
        const key = `${userId}/${uuidv4()}`;
        const command = new PutObjectCommand({
            Bucket:bucketName,
            Key:key,
            Body:file.buffer,
            ContentType:file.mimetype
        })
        await s3.send(command);
        return key
    } catch (error) {
        return error
    }
}

const getImageKeysByProject= async(projectId,key)=>{
    const command   = new ListObjectsV2Command({
        Bucket:bucketName,
        prefix:projectId
    })
    const {Contents}= await s3.send(command)||[];
    return  Contents.filter(image=>image.Key===key)
}

const getBotSignedUrl=async(projectId,key)=>{
    try {
        const imageKeys = await getImageKeysByProject(projectId,key);
        const command=new GetObjectCommand({Bucket:bucketName,Key:imageKeys[0].Key})
        const presignedUrl= await getSignedUrl(s3,command,{expiresIn:900})
        return presignedUrl
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    uploadBotIcon ,
    getBotSignedUrl
}
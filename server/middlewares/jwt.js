const jwt = require('jsonwebtoken');
require('dotenv').config()

const createToken= async (data)=>{
    const token = await jwt.sign(data,process.env.ACCESS_TOKEN);
    return token
}

const verifyToken=async(token)=>{
    const response=await jwt.verify(token,process.env.ACCESS_TOKEN)
    return response
}


module.exports={createToken,verifyToken}
const mongoose = require('mongoose');


const userModel=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},{timestamps:true})

const Users = mongoose.model('users',userModel)
module.exports = Users
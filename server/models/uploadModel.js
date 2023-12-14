const mongoose=require('mongoose');

const uploadModel=new mongoose.Schema({
    projectId:{
        type:mongoose.Types.ObjectId,
        reqired:true
    },
    filename:{
        type:String,
        require:true
    },
    uploadType:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
},{timestamps:true});

const Uploads= mongoose.model('uploads',uploadModel);

module.exports = Uploads
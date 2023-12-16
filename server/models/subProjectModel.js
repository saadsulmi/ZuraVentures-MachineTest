const mongoose=require('mongoose');

const subProjectModel=new mongoose.Schema({
    projectId:{
        type:mongoose.Types.ObjectId,
        reqired:true
    },
    filename:{
        type:String,
        required:true
    },
    uploadType:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false,
        required:true
    },
    description:{
        type:String,
        required:true
    },
},{timestamps:true});

const subProjects= mongoose.model('subProjects',subProjectModel);

module.exports = subProjects
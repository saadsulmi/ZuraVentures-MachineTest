const mongoose=require('mongoose');

const subProjectModel=new mongoose.Schema({
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

const subProjects= mongoose.model('subProjects',subProjectModel);

module.exports = subProjects
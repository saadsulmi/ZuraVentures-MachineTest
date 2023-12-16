const mongoose=require('mongoose');

const projectModel=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    projectName:{
        type:String,
        required:true
    }
},{timestamps:true});

const Project = mongoose.model('Projects',projectModel);

module.exports=Project;
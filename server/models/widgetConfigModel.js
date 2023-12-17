const mongoose =require('mongoose');

const configSchema = new mongoose.Schema({
    projectId:{
        type:mongoose.Types.ObjectId,
        reqired:true
    },
    chatbotname:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    placeholder:{
        type:String,
        required:true
    },
    primarycolor:{
        type:String,
        required:true
    },
    fontcolor:{
        type:String,
        required:true
    },
    fontsize:{
        type:Number,
        required:true
    },
    chatheight:{
        type:Number,
        required:true
    },
    showsource:{
        type:Boolean,
        required:true
    },
    chaticonsize:{
        type:String,
        required:true
    },
      screenposistion:{
        type:String,
        required:true
    },
    distanceBottom:{
        type:Number,
        required:true
    },
    distanceHorizontal:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true,
        default:null
    }
},{timestamps:true})

const configModel=mongoose.model('configModel',configSchema)
module.exports = configModel
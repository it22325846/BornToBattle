const mongoose = require("mongoose");

const judgeSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required:true 
    },
    gender:{
        type: String,
        required: true
    },
    event:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    
    institute:{
        type: String,
        required: true
        
    },
    description:{
        type: String,
        required: true
        
    },
    un:{
        type: String,
        required: true
        
    },
    password: {
        type: String,
        required: true
    }
    // ,
    // photo: {
    //     type: String,
    //     required: true
    // }
    
});

//const Student = mongoose.model("Student",studentSchema)
module.exports=mongoose.model("Judge",judgeSchema);
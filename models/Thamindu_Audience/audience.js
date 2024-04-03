const mongoose = require("mongoose");
const photoSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String
  });

const audienceSchema = new mongoose.Schema({
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
    phoneNumber:{
        type: Number,
        required: true
    },
    un:{
        type: String,
        required: true
        
    }
    // photo: {
    //     data: Buffer,
    //     contentType: String
    // }
    
});

const Audience = mongoose.model("audience",audienceSchema);

module.exports = Audience;


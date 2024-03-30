const mongoose = require("mongoose");
const photoSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String
  });

const candidateSchema =new mongoose.Schema({
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
    category:{
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

//const Student = mongoose.model("Student",studentSchema)

 module.exports=mongoose.model("Candidate",candidateSchema);
// const Photo = mongoose.model('Photo', photoSchema);
// const Candidate = mongoose.model('Candidate', candidateSchema);

// module.exports = { Photo,Candidate };
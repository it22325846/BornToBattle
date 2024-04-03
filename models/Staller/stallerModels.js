//because we connect with mongoDB
const mongoose = require('mongoose');

//create the schema variable
const schema = mongoose.Schema;

//create the schema object
const stallerSchema = new schema({
    sbn : {
        type : String,
        required : true,
    },
    companyName : {
        type : String,
        required : true,
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    mobile : {
        type : Number,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    province : {
        type : String,
        required : true,
    },
    postalCode : {
        type : Number,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    
})

//pass the created schema to the mongoDB
//                           <document name>
const staller = mongoose.model("stallerItem", stallerSchema);

//export the schema( MUST DO)
module.exports = staller;

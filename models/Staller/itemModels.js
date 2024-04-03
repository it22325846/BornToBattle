//because we connect with mongoDB
const mongoose = require('mongoose');

//create the schema variable
const schema = mongoose.Schema;

//create the schema object
const itemSchema = new schema({
    pName : {
        type : String,
        required : true,
    },
    pPrice : {
        type : Number,
        required : true,
    },
    pImage: {
        type : String,
        required : true,
    },
    
})

//pass the created schema to the mongoDB
//                           <document name>
const item = mongoose.model("itemTable", itemSchema);

//export the schema( MUST DO)
module.exports = item;

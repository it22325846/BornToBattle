const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const candidateSchema = new Schema({

    name : {
        type : String,
        required: true
    },

    age : {
        type : Number,
        required : true
    },

    email : {
        type : String,
        required: true
    },

    contact_number : {
        type : Number,
        required : true

    },

    gender : {
        type : String,
        required :true
    },

    comp_type : {
        type : String,
        required : true
    },

    card_number : {
        type : Number,
        required : true
    },

    expiration : {
        type : Date,
        required : true
    },

    cvv : {
        type : Number,
        required : true

    },

})

const Candidate = mongoose.model("candidate",candidateSchema);

module.exports = Candidate;

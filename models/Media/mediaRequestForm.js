const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestFormSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    address1: {
        type: String,
        required: true
    },
    address2: String,
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const requestForm = mongoose.model("RequestForm", requestFormSchema);

module.exports = requestForm;

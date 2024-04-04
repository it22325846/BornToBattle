const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mediaSchema = new Schema({

    name:{
        type : String,
        require:true
    },
    description:{
        type : String,
        require:true
    },
    image:{
        type : String,
        require:true
    }


});

const media = mongoose.model("gallery",gallerySchema);

module.exports = media;

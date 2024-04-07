const mongoose = require("mongoose");

const mediaManager_SignUp_Signin = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("media_signUp_signIn", mediaManager_SignUp_Signin);
const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');
let JLogin = require("../../models/venath_registration_models/judge_signup_model");





router.post('/jsignup/save', (req, res) => {
  let newLogin = new JLogin(req.body);

  newLogin.save()
    .then(() => {
      return res.status(200).json({
        success: 'Login information saved successfully',
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err.message,
      });
    });
});

router.post('/jsignup/checkUsername', async (req, res) => {
  const { username } = req.body;

  try {
    const existingUser = await JLogin.findOne({ username });

    if (existingUser) {
      res.json({ usernameExists: true });
    } else {
      res.json({ usernameExists: false });
    }
  } catch (error) {
    console.error("Error checking username:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/api/jsignin', async (req, res) => {

  const {username, password}=req.body;
  
  try{
    const user= await JLogin.findOne({username});

    if(user){
      if(user.password===password){
        return res.json({success: true});
      }
      else{
        return res.json({success: false, message: 'invalid credentials'});
      }
    }
    else{
      return res.json({success: false, mesage: 'no user found'})
    }
  }
  catch{
    console.error("error in sign-in:", error);
    return res.status(500).json({error: "Internal server error", details: error.mesage})
  }
});

router.delete('/jsignup/delete/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const deletedUser = await JLogin.findOneAndDelete({ username });

    if (deletedUser) {
      res.json({ success: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

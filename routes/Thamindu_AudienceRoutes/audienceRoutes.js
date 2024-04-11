// const express = require("express");
// const router = require("express").Router();
// const multer = require('multer');
// const Audience = require("../../models/Thamindu_Audience/audience");
// // let Candidate = require("../models/audience");
// //const Photo = require('../models/candidates');
// const path = require('path');



// // POST work => postman 
// router.post('/audience/save', (req, res)=>{

//     let newPost = new Audience(req.body);
//     newPost.save()
//     .then(() => {
//         return res.status(200).json({
//             success: "Posts saved successfully",
//             // data: {
//             //     _id: createdUser._id,
//             // }
//         });
//     })
//     .catch((err) => {
//         return res.status(400).json({
//             error: err
//         });
//     });

//         });




// // Multer configuration for storing photos
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/profile-photos'); // Set the destination folder for profile photos
//     },
//     filename: function (req, file, cb) {
//       const ext = path.extname(file.originalname);
//       cb(null, Date.now() + ext); // Set the filename to be unique (timestamp + original extension)
//     }
//   });
  
//   const upload = multer({ storage: storage });
  
//   // POST route for saving a profile photo
//   router.post('/profile-photo/save', upload.single('photo'), (req, res) => {
//     // Assuming 'photo' is the name attribute of the file input in your form
//     if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded.' });
//       }
    
//       // Process the file, save to the database, etc.
//       const { filename } = req.file;
    
//       // You can save the filename to the database or perform other actions here
    
//       return res.status(200).json({ success: 'Profile photo saved successfully' });
//   });




// //read get all students => needed ?
// router.get('/audience', (req, res) => {
//     Audience.find().exec()
//         .then(Audience => {
//             return res.status(200).json({
//                 success: true,
//                 existingAudience: Audience
//             });
//         })
//         .catch(err => {
//             return res.status(400).json({
//                 error: err
//             });
//         });
// });



// // router.route("/").get((req,res)=>{
// //     const name=req.body.name;
// //     const age=Number(req.body.age);
// //     const gender=req.body.gender;

// //     Student.find()
// //     .then((students)=>{
// //         res.json(students)
// //     })
// //     .catch((err)=>{
// //        console.log(err);
// //     })

// // })


// //update students




// // router.route("/update/:id").post(async (req,res)=>{
// //     let userId = req.params.id;

// // const{name,age,gender}=req.body; //dstrutcure
// //     // const name=req.body.name;
// //     // const age=Number(req.body.age);
// //     // const gender=req.body.gender;

// //     const updateStudent = {
// //         name,
// //         age,
// //         gender
// //     }
// //     const update = await Student.findByIdAndUpdate(userId,updateStudent)
// //     //res.status(200).send({status: "User updated", user:update})
    

// //     .then(()=>{
// //         res.status(200).send({status: "User updated", user:update})
// //     })
// //     .catch((err)=>{
// //         console.log(err);
// //         res.status(500).send({status: "Error",err})
// //     })


// // })





// // delete audience => work ?
// router.delete('/audience/delete/:id', (req, res) => {

//     console.log('Deleting audience with ID:', req.params.id);

//       Audience.findByIdAndDelete(req.params.id)
//         .then(deletedAudience => {
//             console.log('Deleted audience:', deletedAudience);
//             return res.status(200).json({
//                 success: 'deleted',
//                 deletedAudience
//             });
//         })
//         .catch(err => {
//             console.error('Delete error:', err);
//             return res.status(400).json({
//                 error: err
//             });
//         });
// });



// // router.route("/delete/:id").delete(async (req,res)=>{
// //     let userId = req.params.id;


// //  await Student.findByIdAndDelete(userId)
// //     //res.status(200).send({status: "User updated", user:update})
    

// //     .then(()=>{
// //         res.status(200).send({status: "User Deleted", user:update})
// //     })
// //     .catch((err)=>{
// //         console.log(err);
// //         res.status(500).send({status: "Error delete",err})
// //     })


// // })

// // //get only one person
// // router.route("/get/:id").get(async (req,res)=>{
// //     let userId = req.params.id;
// //   const user=  await Student.findById(userId)
// //     .then(()=>{
// //         res.status(200).send({status: "User fetched", user:user})
// //     })
// //     .catch((err)=>{
// //         console.log(err);
// //         res.status(500).send({status: "Error delete",err})
// //     })
// // })



// //get a specific student

// // router.get("/student/:id",(req,res)=>{
// //     let studentId= req.params.id;

// //     Student.findById(studentId,(err,student)=>{
// //         if(err){
// //             return res.status(400).json({success:false, err})
// //         }

// //         return res.status(200).json({
// //             success:true,
// //             student
// //         });
// //     });
// // })


// router.get("/audience/:id",(req,res) => {
//     let candidateId= req.params.id;

//       Audience.findById(req.params.id)
//         .then(Audience => {
           
//             return res.status(200).json({
//                 success:true,
//                 Audience
//             });
//         })
//         .catch(err => {
            
//             return res.status(400).json({
//                 success:false,
//                  err
//             });
//         });
// });


// // Your route for fetching audience by username
// router.get("/audience/username/:username", (req, res) => {
//     let username = req.params.username;

//       Audience.findOne({ un: username })
//         .then(Audience => {
//             if (!Audience) {
//                 return res.status(404).json({
//                     success: false,
//                     message: 'Audience not found'
//                 });
//             }

//             return res.status(200).json({
//                 success: true,
//                 Audience
//             });
//         })
//         .catch(err => {
//             return res.status(400).json({
//                 success: false,
//                 error: err
//             });
//         });
// });



// // no needed ?
// router.get('/user/find/:username', async (req, res) => {
//     try {
//       const username = req.params.username;
  
//       // Find the user by username
//       const user = await User.findOne({ un: username });
  
//       if (!user) {
//         return res.status(404).json({
//           success: false,
//           message: 'User not found',
//         });
//       }
  
//       // Assuming your User model has an '_id' property for the user ID
//       const userId = user._id;
  
//       return res.status(200).json({
//         success: true,
//         user,
//         userId,
//       });
//     } catch (error) {
//       console.error('Error finding user:', error);
//       return res.status(500).json({
//         success: false,
//         error,
//       });
//     }
//   });



//   router.put('/audience/update/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, age, gender, phoneNumber } = req.body;
  
//     Audience.findByIdAndUpdate(id, { name, age, gender, phoneNumber }, { new: true })
//       .then(updatedAudience => {
//         res.status(200).json({ success: true, updatedAudience });
//       })
//       .catch(error => {
//         console.error("Error updating audience details:", error);
//         res.status(500).json({ success: false, error });
//       });
//   });



// module.exports = router;


const express = require("express");
const router = express.Router();
const Audience = require("../../models/Thamindu_Audience/audience");



// Save audience details => postman work
router.post("/audience/save", async (req, res) => {
    try {
        const { name, age, gender, phoneNumber, username } = req.body;
        // const username = req.session.username; // Retrieve username from session

        if (!name || !age || !gender || !phoneNumber || !username) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        
        const audienceData = { 
            name: name,
            age:age, 
            gender:gender, 
            phoneNumber:phoneNumber, 
            username:username 
        };

        const audience = new Audience(audienceData);
        await audience.save();
        res.status(201).json({ success: 'Audience saved successfully', audience  }); // Send success message
        // res.json({ success: 'User save successfully' });

    } catch (error) {
      console.error('Error saving audience:', error);
      res.status(500).json({ error: 'Failed to save audience' });
    }
});



// Edit audience details
router.put("/audience/update/:id", async (req, res) => {
    try {

        const {id} = req.params;
        const updatedAudience = await Audience.findByIdAndUpdate(
            id, 
            req.body, 
            {new: true}
        );
        res.json(updatedAudience);
        
        
    } catch (error) {
        res.status(400).json({ error: err.message });
        console.error("Error updating audience: ", error);
        // res.status(500).json({ error: "Failed to update audience" });
    }
});



// Delete audience details
router.delete("/audience/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const audience = await Audience.findByIdAndDelete(id);
        if (!audience) {
            res.status(404).send("Audience not found");
        }
        res.send(audience);
    } catch (error) {
        res.status(500).send(error);
    }
});



// Display audience details => postman work
router.get("/api/audience/username/:username", async (req, res) => {
    
    const {username} = req.params;
    
    try {
        const audience = await Audience.find({ username });
        res.send(audience);
        res.status(200).json({ success: true, audience });

    } catch (error) {
        res.status(500).send(error);
        res.status(500).json({ success: false, error: error.message });
    }
});



module.exports = router;

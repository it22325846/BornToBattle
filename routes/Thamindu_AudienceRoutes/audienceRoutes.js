
const express = require("express");
const router = express.Router();
const Audience = require("../../models/Thamindu_Audience/audience");




//working => username save 
router.post("/audience/save/un", async (req, res) => {
    try {
        const { username } = req.body;

        if (!username) {
          return res.status(400).json({ error: 'Missing username field' });
        }
        const audienceData = { 
            username: username 
        };

        const audience = new Audience(audienceData);
        await audience.save();


        res.status(201).json({ success: 'Request sent successfully', audience });

    } catch (error) {
        console.error('Error sending request:', error);
        res.status(500).json({ error: 'Failed to send request' });
    }
});





// // Save audience details => postman work
// router.post("/audience/save", async (req, res) => {
//     try {
//         const { name, age, gender, phoneNumber } = req.body;
//         // const username = req.session.username; // Retrieve username from session

//         if (!name || !age || !gender || !phoneNumber ) {
//           return res.status(400).json({ error: 'Missing required fields' });
//         }
//         if (isNaN(age) || age < 0 || age > 150) {
//             return res.status(400).json({ error: 'Invalid age' });
//         }
        
//         const audienceData = { 
//             name: name,
//             age:age, 
//             gender:gender, 
//             phoneNumber:phoneNumber 
//             // username:username 
//         };

//         const audience = new Audience(audienceData);
//         await audience.save();
//         res.status(201).json({ success: 'Audience saved successfully', audience  }); // Send success message
//         // res.json({ success: 'User save successfully' });

//     } catch (error) {
//       console.error('Error saving audience:', error);
//       res.status(500).json({ error: 'Failed to save audience' });
//     }
// });



// Edit audience details
router.put("/audience/update/:id", async (req, res) => {
    try {

        const {id} = req.params;
        const { name, age, gender, phoneNumber } = req.body;

        const updatedAudience = await Audience.findByIdAndUpdate(
            id, 
            { name, age, gender, phoneNumber },
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
router.get("/audience/:username", async (req, res) => {
    
    const {username} = req.params;
    
    try {
        const audience = await Audience.findOne({ username });
        res.send(audience);
        res.status(200).json({ success: true, audience });

    } catch (error) {
        res.status(500).send(error);
        res.status(500).json({ success: false, error: error.message });
    }
});



module.exports = router;

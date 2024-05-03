
const express = require("express");
const router = express.Router();
const Audience = require("../../models/Thamindu_Audience/audience");





// Delete audience details
router.delete("/audience/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const audience = await Audience.findByIdAndDelete(id);
        
        if (!audience) {
            res.status(404).send("Audience not found");
        }
        res.status(200).json(audience);
    } catch (error) {
        res.status(500).send(error);
    }
});



// // Display audience details => postman work
// router.get("/audience/:username", async (req, res) => {
    
//     const {username} = req.params;
    
//     try {
//         const audience = await Audience.findOne({ username });
//         if (!audience) {
//             return res.status(404).json({ error: 'Audience not found' });
//         }
//         res.status(200).json({ success: true, audience });

//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message });
//     }
// });



// Display all audience details
router.get("/audience", async (req, res) => {
    try {
        const allAudience = await Audience.find({});
        res.status(200).json({ success: true, audience: allAudience });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});







module.exports = router;

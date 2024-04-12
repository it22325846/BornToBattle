const express = require("express");
const router = express.Router();
const Judge = require("../../models/venath_registration_models/judges_model");

// POST route for adding a new Judge
router.post('/judges/save', (req, res) => {
    let newJudge = new Judge(req.body);
    newJudge.save()
        .then(() => {
            return res.status(200).json({
                success: "Judge saved successfully",
            });
        })
        .catch((err) => {
            return res.status(400).json({
                error: err
            });
        });
});

// GET route for fetching all Judges
router.get('/judges', (req, res) => {
    Judge.find().exec()
        .then(judges => {
            return res.status(200).json({
                success: true,
                existingJudges: judges
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            });
        });
});

//delete a judge
router.delete('/judge/delete/:id',(req,res)=>{
    Judge.findByIdAndDelete(req.params.id)
    .then(deletedJudge =>{
        return res.status(200).json({
            success:'deleted',
            deletedJudge
        });
    })

    .catch(err=>{
        return res.status(400).json({
            error:err
        });
    })
});

//select a judge
router.delete('/judge/:id',(req,res)=>{
    Judge.findById(req.params.id)
    .then(Judge =>{
        return res.status(200).json({
            success:true,
            Judge
        });
    })

    .catch(err=>{
        return res.status(400).json({
            success:false,
            error:err
        });
    })
});

module.exports = router;

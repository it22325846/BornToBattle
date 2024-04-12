const express = require('express');
const router =  require('express').Router();
let EventCategories = require("../../models/gimhani_event_models/MainEventCategories_model");

//save main event 
router.post('/cat/save', (req, res)=>{
    let newPost = new EventCategories(req.body);
    newPost.save()
    .then(() => {
        return res.status(200).json({
            success: "Posts saved successfully"
        });
    })
    .catch((err) => {
        return res.status(400).json({
            error: err
        });
    });

        });

    //get data 
        router.get('/cat', (req, res) => {
            // Retrieve all events from the database
            EventCategories.find().exec()
              .then(categories => {
                // If successful, send a JSON response with success status and the array of events
                return res.status(200).json({
                  success: true,
                  existingCategories: categories
                });
              })
              .catch(err => {
                // If there is an error, send a JSON response with error status and the error message
                return res.status(400).json({
                  error: err
                });
              });
          });

          

          module.exports = router;
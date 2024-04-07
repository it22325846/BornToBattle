const router = require("express").Router();
const multer = require('multer');
let Item = require("../../models/Staller/itemModels");
const path = require('path');
const express = require('express');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) { 
      return cb(null, `${Date.now()}_${file.originalname}`) 
    }
  })
  const upload = multer({ storage })



// Create
router.route("/create").post(upload.single('pImage'), (req, res) => {

    const pName = req.body.pName;
    const pPrice = Number(req.body.pPrice);


    console.log(req.file, req.body); //debugging
    const pImage = req.file.filename;

    const newItem = new Item({
        pName,
        pPrice,
        pImage,
    });

    newItem.save().then(() => {
        res.json("Item created.");
    }).catch((err) => {
        console.log(err);
    });
});


//Read

// Serving images from the 'uploads' directory
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Read route
router.route("/read").post((req, res) => {
  Item.find().then((items) => {
    res.json(items);
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;

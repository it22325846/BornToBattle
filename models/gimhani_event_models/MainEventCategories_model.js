const mongoose = require('mongoose');

const mainEventCategoriesSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  judgesCount: {
    type: Number,
  },
  rules: {
    type: String, 
  },
  registrationOpen: {
    type: Boolean,
  },
});

module.exports = mongoose.model('mainEventCategories', mainEventCategoriesSchema);

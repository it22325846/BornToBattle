const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  judges: {
    type: String, // Assuming judges is a string, you can adjust the type accordingly
  },
  time: {
    type: String, // Assuming time is a string, you can adjust the type accordingly
  },
  ageGroup: {
    type: String,
    // Assuming you want to restrict ageGroup to certain values (under18 or above18)
    enum: ['under18', 'above18'],//If a value other than 'under18' or 'above18' is attempted to be assigned to ageGroup, it will result in a validation error.
  },
  eventCategory: {
    type: String,
    // Assuming you want to restrict eventCategory to certain values
    enum: ['dancing', 'rap', 'beatboxing'],
  },
  style: {
    type: String,
    // Assuming you want to restrict style to certain values
    enum: ['traditional', 'hiphop', 'na'],
  },
});

module.exports = mongoose.model('Events', eventSchema);

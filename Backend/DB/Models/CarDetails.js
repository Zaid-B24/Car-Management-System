const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100, // You can set a limit on title length
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500, // Limit the description length as needed
  },
  tags: {
    type: [String],
    default: [],
    validate: [arrayLimit, 'Exceeds the limit of 10 tags'], // Optional validation
  },
  photo: {
    type: String,
    required: true, // URL or file path for the uploaded photo
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Helper function to validate the tag array length
function arrayLimit(val) {
  return val.length <= 10; // Set maximum number of tags
}

// Pre-save middleware to update the `updatedAt` field on document update
carSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

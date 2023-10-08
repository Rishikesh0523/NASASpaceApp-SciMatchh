const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true,
  },
});

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please input a name']
  },
  email: {
    type: String,
    required: [true, 'Please input an email.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please input a name']
  },
  phone: {
    type: String,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  skills: [skillSchema],
  links: [{
    type: String,
  }],
  address: {
    addressLine: {
      type: String
    },
    city: {
      type: String
    },
    country: {
      type: String
    }
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);
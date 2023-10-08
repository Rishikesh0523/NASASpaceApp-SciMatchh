const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Please input a title.']
  },
  description: {
    type: String,
    required: [true, 'Please input a description.']
  },
  image: {
    data: Buffer,
    contentType: String
  },
  currentMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Please input current members.'],
    ref: 'User'
  }],
  requiredMembers: {
    type: Number,
    required: [true, 'Please input required members.']
  },
  type: {
    type: String,
    enum: ['On-Site', 'Remote', 'Hybrid'],
    required: true,
  },
  relatedLinks: [{
    type: String
  }],
  suggestions: [{
    type: String
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Project', projectSchema)
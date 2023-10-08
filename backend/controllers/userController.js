const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const upload = require('../config/multer');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
  upload(req, res, async () => {
    const { name, email, password } = req.body;
    if (!name || !email  || !password) {
      res.status(400);
      throw new Error("Please add required fields.");
    }
    if (await User.findOne({email})) {
      res.status(400);
      throw new Error("User already exists.");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = {
      name,
      email,
      password : hashedPassword,
      image: {
        data: 'defaultProfilePicture.png',
        contentType: 'image'
      }
    };
    const user = await User.create(userData);
    if(user) {
      res.status(201).json({
        _id: user.id,
        name,
        email,
      });
    }
    else {
      res.status(400);
      throw new Error('Invalid user data.');
    }
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  const rightPassword = await bcrypt.compare(password, user.password);
  
  if(user && rightPassword) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    });
  }
  else {
    res.status(400);
    throw new Error("Invalid credentials.")
  }
});

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_KEY, {expiresIn: '5d'})
}

const getUser = asyncHandler(async (req, res) => {
  const {_id, name, email} = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email
  });
});

module.exports = {
  registerUser,
  loginUser,
  getUser
}
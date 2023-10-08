const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next)=> {
  let token;
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    }
    catch {
      res.status(401)
      throw new Error('Not authorized.')
    }
  };
  if (!token) {
    res.status(401)
    throw new Error('Not authorized.')
  };
});

module.exports = {
  protect
}
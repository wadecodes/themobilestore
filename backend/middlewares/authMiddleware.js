import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

export default asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
    } catch (error) {
      console.error(error);
      res.status(401);
      throw Error('Not Authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw Error('Not Authorized, no token');
  }

  next();
});

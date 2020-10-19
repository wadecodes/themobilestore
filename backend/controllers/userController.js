import asyncHandler from 'express-async-handler';

import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

//* @description    :     Auth user & get token
//* @route          :     POST /api/users/login
//* @access         :     Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    res.status(404);
    throw new Error('The Email does not exist');
  }
  const result = await user.matchPassword(password);
  if (!result) {
    res.status(400);
    throw new Error('Invalid Email or Password');
  }

  res.json({
    sucess: true,
    _id: user._id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
});

//* @description    :     Get user profile
//* @route          :     GET /api/users/profile
//* @access         :     Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error('The Email does not exist');
  }
  res.json({
    sucess: true,
    _id: user._id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
  });
});

//* @description    :     Get user profile
//* @route          :     GET /api/users/profile
//* @access         :     Private
export const createUser = asyncHandler(async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400);
    throw Error('Email already exists.');
  }
  user = await User.create(req.body);
  res.status(201).json({ success: true });
});

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
    success: true,
    _id: user._id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
});

//* @description    :     Create user profile
//* @route          :     GET /api/users
//* @access         :     Public
export const createUser = asyncHandler(async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400);
    throw Error('Email already exists.');
  }
  user = await User.create(req.body);
  res.status(201).json({ success: true });
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
    success: true,
    _id: user._id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
  });
});

//* @description    :     Update user profile
//* @route          :     PUT /api/users/profile
//* @access         :     Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('+password');
  if (!user) {
    res.status(404);
    throw new Error('The Email does not exist');
  }
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  if (req.body.password) {
    user.password = req.body.password;
  }

  const updatedUser = await user.save();
  res.json({
    success: true,
    _id: user._id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
    token: generateToken(updatedUser._id),
  });
});

import express from 'express';

import {
  authUser,
  getUserProfile,
  createUser,
} from '../controllers/userController.js';
import protect from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/').post(createUser);

export default router;

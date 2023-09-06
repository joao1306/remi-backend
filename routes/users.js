import express from 'express';
import { getUsers, authUser } from '../controllers/user.js'

const router = express.Router();

router.get('/', getUsers);
router.put('/login', authUser)

export default router;
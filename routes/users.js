import express from 'express';
import { getUsers, authUser, userPersist } from '../controllers/user.js'

const router = express.Router();

router.get('/', getUsers);
router.put('/login', authUser);
router.post('/cadastro', userPersist);

export default router;
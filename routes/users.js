import express from 'express';
import { getUsers, getAutor, authUser, userPersist } from '../controllers/user.js'

const router = express.Router();

router.get('/', getUsers);
router.put('/login', authUser);
router.post('/cadastro', userPersist);
router.put('/autor-receita', getAutor);

export default router;
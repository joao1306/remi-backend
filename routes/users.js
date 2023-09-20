import express from 'express';
import { getUsers, getAutor, authUser, userPersist, editUser } from '../controllers/user.js'

const router = express.Router();

router.get('/', getUsers);
router.put('/login', authUser);
router.post('/cadastro', userPersist);
router.put('/autor-receita', getAutor);
router.put('/alterar-dados-de-usuario', editUser);

export default router;
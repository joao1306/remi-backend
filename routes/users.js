import express from 'express';
import { getUsers, getAutor, authUser, userPersist, editUser, putProfilePic, editUserFavorites } from '../controllers/user.js'

const router = express.Router();

router.get('/', getUsers);
router.put('/login', authUser);
router.post('/cadastro', userPersist);
router.put('/autor-receita', getAutor);
router.put('/alterar-dados-de-usuario', editUser);
router.put('/alterar-favoritas-de-usuario', editUserFavorites);
router.put('/selecionar-foto', putProfilePic);


export default router;
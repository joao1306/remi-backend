import express from 'express';
import { getRecipes, recipePersist } from '../controllers/recipe.js'

const router = express.Router();

router.get('/recipes', getRecipes);
router.post('/cadastrar-receita', recipePersist);

export default router;
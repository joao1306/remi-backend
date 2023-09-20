import express from 'express';
import { getRecipes, recipePersist, getById } from '../controllers/recipe.js'

const router = express.Router();

router.get('/recipes', getRecipes);
router.post('/cadastrar-receita', recipePersist);
router.put('/getRecipeById', getById);

export default router;
import express from 'express';
import { getRecipes, getMyRecipes, recipePersist, getById } from '../controllers/recipe.js'

const router = express.Router();

router.get('/recipes', getRecipes);
router.get('/my-recipes', getMyRecipes);
router.post('/cadastrar-receita', recipePersist);
router.put('/getRecipeById', getById);

export default router;
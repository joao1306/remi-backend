import express from 'express';
import { getRecipes, getMyRecipes, recipePersist, getById, putNota, delRecipe, getBestRecipes } from '../controllers/recipe.js'

const router = express.Router();

router.get('/recipes', getRecipes);
router.get('/my-recipes', getMyRecipes);
router.get('/best-recipes', getBestRecipes);
router.post('/cadastrar-receita', recipePersist);
router.put('/getRecipeById', getById);
router.put('/persistir-nota', putNota);
router.delete('/deletar-receita', delRecipe);

export default router;
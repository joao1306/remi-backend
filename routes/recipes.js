import express from 'express';
import { getRecipes } from '../controllers/recipe.js'

const router = express.Router();

router.get('/recipes', getRecipes);

export default router;
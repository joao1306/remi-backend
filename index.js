import express from 'express';
import userRoutes from './routes/users.js'
import recipeRoutes from './routes/recipes.js'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRoutes)
app.use('/', recipeRoutes)

app.listen(8800);
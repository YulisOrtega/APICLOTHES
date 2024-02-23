import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import productsRouter from './routes/clothes.routes.js';
config();
const app=express();
//Settings
app.set('view engine', 'ejs');
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));//recibir datos desde un servidor
app.use(morgan('dev'));
app.use('/api/clothes', productsRouter);
export default app;
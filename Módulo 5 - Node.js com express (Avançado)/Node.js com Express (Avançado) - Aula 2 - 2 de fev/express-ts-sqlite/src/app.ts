import express from 'express';
import productRoutes from './routes/ProductRoutes';
const app = express();
import cors from 'cors';

app.use(cors());
// Middleware para facilitar a leitura do corpo das requisições
app.use(express.json());
// Rotas
app.use('/products', productRoutes);
export default app;

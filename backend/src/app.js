import express from 'express';
import cors from 'cors';
import productRoutes from './routes/products.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

export default app;
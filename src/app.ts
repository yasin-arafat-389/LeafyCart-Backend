import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/utils/globalErrorHandler/globalErrorHandler';
import { ProductRoutes } from './app/modules/product/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(
  cors({ origin: ['http://localhost:5173', 'https://leafycart-389.web.app'] }),
);

// application routes
app.use('/api/v1/products', ProductRoutes);

// Global error handler
app.use(globalErrorHandler);

// Catch all middleware for handling undefined routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;

import express, { Express, Request, Response, NextFunction } from "express";
import cors from 'cors';
import helmet from "helmet";
import morgan from "morgan";
import logger from "./utils/logger";

import carDealerRouter from './routers/carDealer.routes'
import carMakeRouter from './routers/carMake.routes'
import carRouter from './routers/car.routes'
import { connectDB } from "./config/db";

const PORT = 5000
const app: Express = express();


// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('tiny', {
    stream: {write: (message) => logger.info(message.trim())}
}));

app.use(express.json());
app.use(express.urlencoded({ extended:true} ));
// -- Middleware --


// Routes

app.use('/api/car-dealer', carDealerRouter);
app.use('/api/car-make', carMakeRouter);
app.use('/api/car', carRouter);

// -- Routes --


// Basic route
app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: 'Car Dealer API - Welcome!' });
});




// Basic error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Error:', err.message);
  res
    .status(500)
    .json({
      success: false,
      message: 'Something went wrong!',
      error: process.env.NODE_ENV ? err.message : undefined
    });
});

// Start server
app.listen(PORT, () => {
  logger.info(`Server is Listen... Port: ${PORT}`);
  connectDB()
});

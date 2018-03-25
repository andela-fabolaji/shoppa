// main deps
import { Router } from 'express';
import userRouter from './user';
import shopRouter from './shop';

const router = Router();

// app route middleware
const appRouter = app => {
  app.use('/users', userRouter(router));
  app.use('/shops', shopRouter(router));
}

export default appRouter;
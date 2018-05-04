// main deps
import { Router } from 'express';
import validate from 'express-validation';
import userRouter from './user';
import shopRouter from './shop';

const router = Router();

// app route middleware
const appRouter = (app) => {
  app.use('/users', userRouter(router));
  app.use('/shops', shopRouter(router));

  // error handler
  app.use((err, req, res) => res.status(422).json({
    status: 422,
    title: err.statusText,
    detail: err.errors.map(error => ({
      field: error.field.join(', '),
      message: error.messages.join(', '),
      location: error.location,
    }))
  }));
};

export default appRouter;

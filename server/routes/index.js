import { Router } from 'express';
import { userRouter } from './user';
import { shopRouter } from './shop';

const router = Router();

export const mapRoutes = {
  '/api/users': userRouter(router),
  '/api/shops': shopRouter(router),
};

import { Router } from 'express';
import userRouter from './user';
import shopRouter from './shop';

const router = Router();

const mapRoutes = {
  '/api/users': userRouter(router),
  '/api/shops': shopRouter(router),
};

export default mapRoutes;

import { userRouter } from './user';
import { shopRouter } from './shop';
import { roleRouter } from './role';

const mapRoutes = {
  '/api/users': userRouter,
  '/api/shops': shopRouter,
  '/api/roles': roleRouter
};

export default mapRoutes;

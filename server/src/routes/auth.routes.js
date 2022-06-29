import {Router} from 'express';
import { signup, signin, getProfile } from '../controllers/auth.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', signup);
router.post('/signin', signin);
router.get('/profile', AuthMiddleware, getProfile);

export default router;

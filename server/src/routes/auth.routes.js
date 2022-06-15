import {Router} from 'express';
import { signup, signin } from '../controllers/auth.controller';

const router = Router();

router.post('/register', signup);
router.post('/signin', signin);

export default router;

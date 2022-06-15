import {Router} from 'express';
import { deleteUser, getAllUsers, getUserByEmail, getUserById, updateUser } from '../controllers/user.controller';

const router = Router();

router.put('/',updateUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/email/:email', getUserByEmail);
router.delete('/:id', deleteUser);

export default router;
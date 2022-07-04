import {Router} from 'express';
import { registerDefinition } from 'swaggiffy';
import { deleteUser, getAllUsers, getUserByEmail, getUserById, updateUser } from '../controllers/user.controller';

const router = Router();

router.put('/:id',updateUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/email/:email', getUserByEmail);
router.delete('/:id', deleteUser);

registerDefinition(router, {tags: 'Users', mappedSchema: 'User', basePath: '/api/v1/users'});
export default router;
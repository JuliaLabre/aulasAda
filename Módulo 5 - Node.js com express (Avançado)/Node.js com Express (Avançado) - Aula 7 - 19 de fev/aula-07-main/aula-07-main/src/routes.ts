import express from 'express';
import { userController } from './factory/user.factory';

export const router = express.Router();

router.get('/', userController.getAllUsers.bind(userController));
router.get('/:id', userController.getUserById.bind(userController));
router.post('/', userController.createUser.bind(userController));
router.delete('/:id', userController.deleteUser.bind(userController));


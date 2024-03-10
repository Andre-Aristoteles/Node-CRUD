import express, { json } from 'express';
import { createUser, findUser, deleteUser, updateUser, getUsers } from '../controllers/users.js';

const router = express.Router();



router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', findUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router
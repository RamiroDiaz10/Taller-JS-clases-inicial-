import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/user.controller.js";

const router = Router();

router.post('/', createUser);
router.get('/', getAllUsers );
router.get('/:idUser', getUserById);
router.delete('/:idUser', deleteUserById);
router.patch('/:idUser', updateUserById);

export default router;
import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/user.controller.js";
import { ROLES, ALLOWED_ROLES } from "../config/global.config.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authorization.middleware.js";

const router = Router();

router.post('/', [authenticationUser, authUser([ROLES.ADMIN])], createUser );
router.get('/', [authenticationUser, authUser([ROLES.ADMIN])], getAllUsers );
router.get('/:idUser', [authenticationUser, authUser([ROLES.ADMIN])], getUserById);
router.delete('/:idUser', [authenticationUser, authUser([ROLES.ADMIN])], deleteUserById);
router.patch('/:idUser', [authenticationUser, authUser([ROLES.ADMIN])], updateUserById);

export default router;
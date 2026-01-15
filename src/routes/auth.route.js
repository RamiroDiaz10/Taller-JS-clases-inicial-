import { Router } from "express";
import { loginUser, reNewToken } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/user.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authorization.middleware.js";
import { ALLOWED_ROLES } from "../config/global.config.js";

const router = Router();

router.post('/login', loginUser);

router.post('/register', createUser);

router.get(
    '/renew-token', 
    [authenticationUser, authUser( ALLOWED_ROLES )],
    reNewToken
 );
 export default router;
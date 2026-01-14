import { Router } from "express";
import { loginUser, reNewToken } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/user.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authUser.middleware.js";

const router = Router();

router.post('/login', loginUser);

router.post('/register', createUser);

router.get(
    '/renew-token', 
    [authenticationUser, authUser],
    reNewToken
 );
 export default router;
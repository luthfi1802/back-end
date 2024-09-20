import express from "express";
import { 
    Login,
    logOut,
    Me,
    forgotPassword,
    resetPassword
    
} from "../contollers/Auth.js"
import {authenticateToken}  from "../middleware/authenticateToken.js";

const router = express.Router();

router.get('/me',authenticateToken, Me)
router.post('/login', Login)
router.delete('/logout', logOut)
router.post('/forgot', forgotPassword)
router.post('/resetpass',resetPassword )



export default router;
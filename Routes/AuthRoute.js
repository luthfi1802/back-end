import express from "express";
import { 
    Login,
    logOut,
    Me,
    forgotPassword,
    resetPassword
    // authenticateToken,
    
} from "../contollers/Auth.js"
// import { authenticateToken } from "../middleware/authenticateToken.js";

const router = express.Router();

router.get('/me', Me)
router.post('/login', Login)
router.delete('/logout', logOut)
router.post('/forgot', forgotPassword)
router.post('/reset', resetPassword)



export default router;
import express from 'express'
import { getUserHistory, loginUser, postComplaint, registerUser } from '../controllers/users/userAuth.js';
const router = express.Router();


router.post('/register' , registerUser);

router.post('/login' , loginUser);

router.post('/ticket_raise' , postComplaint);

router.get('/histories/:id' , getUserHistory);

export default router;
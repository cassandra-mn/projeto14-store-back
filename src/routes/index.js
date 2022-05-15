import express from 'express';
import {register} from '../controllers/signUpController.js';
import {login} from '../controllers/signInController.js';

const router = express.Router();
router.post("/sign-up", register);
router.post("/sign-in", login);

export default router;
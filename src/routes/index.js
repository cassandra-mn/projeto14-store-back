import express from 'express';
import {register} from '../controllers/signUpController.js';
import {login} from '../controllers/signInController.js';

import productsRouter from './productsRouter.js';
import collectionsRouter from './collectionsRouter.js';
import cartController from './cartRouter.js';

const router = express.Router();
router.post("/sign-up", register);
router.post("/sign-in", login);

router.use(productsRouter);
router.use(collectionsRouter);
router.use(cartController);

export default router;
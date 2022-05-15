import express from 'express';

import productsRouter from './productsRouter.js';
import collectionsRouter from './collectionsRouter.js';
import cartController from './cartRouter.js';

const router = express.Router();

router.use(productsRouter);
router.use(collectionsRouter);
router.use(cartController);

export default router;
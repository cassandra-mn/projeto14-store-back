import express from 'express';

import productsRouter from './productsRouter.js';
import collectionsRouter from './collectionsRouter.js';
import checkoutRouter from './checkoutRouter.js';

const router = express.Router();

router.use(productsRouter);
router.use(collectionsRouter);
router.use(checkoutRouter);

export default router;
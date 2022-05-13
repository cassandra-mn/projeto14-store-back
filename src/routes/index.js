import express from 'express';

import productsRouter from './productsRouter.js';
import collectionsRouter from './collectionsRouter.js';

const router = express.Router();

router.use(productsRouter);
router.use(collectionsRouter);

export default router;
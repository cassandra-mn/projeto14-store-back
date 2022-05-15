import express from 'express';

import {products, getProduct} from '../controllers/productsController.js';

const productsRouter = express.Router();

productsRouter.get('/products', products);
productsRouter.get('/product/:id', getProduct);

export default productsRouter;
import express from 'express';

import {addProduct, cart, exclude} from '../controllers/cartController.js';

const checkoutRouter = express.Router();

checkoutRouter.get('/cart', cart);
checkoutRouter.post('/cart', addProduct);
checkoutRouter.delete('/cart/:id', exclude);

export default checkoutRouter;
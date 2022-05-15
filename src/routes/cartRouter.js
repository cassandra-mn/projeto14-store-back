import express from 'express';

import {addProduct, cart} from '../controllers/cartController.js';

const checkoutRouter = express.Router();

checkoutRouter.post('/cart', addProduct);
checkoutRouter.get('/cart', cart);

export default checkoutRouter;
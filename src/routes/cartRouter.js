import express from 'express';

import {addProduct, cart, exclude, update} from '../controllers/cartController.js';

const checkoutRouter = express.Router();

checkoutRouter.get('/cart', cart);
checkoutRouter.post('/cart', addProduct);
checkoutRouter.delete('/cart/:id', exclude);
checkoutRouter.put('/cart/:id', update);

export default checkoutRouter;
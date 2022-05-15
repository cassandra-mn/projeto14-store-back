import express from 'express';

import {addProduct, checkout} from '../controllers/checkoutController.js';

const checkoutRouter = express.Router();

checkoutRouter.post('/checkout', addProduct);
checkoutRouter.get('/checkout', checkout);

export default checkoutRouter;
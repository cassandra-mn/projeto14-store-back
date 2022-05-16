import express from 'express';

import {collections, getCollection} from '../controllers/collectionsController.js';

const collectionsRouter = express.Router();

collectionsRouter.get('/collections', collections);
collectionsRouter.get('/collection/:id', getCollection);

export default collectionsRouter;
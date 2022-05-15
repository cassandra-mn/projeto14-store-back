import express from 'express';

import {setCollections} from '../controllers/collectionsController.js';

const collectionsRouter = express.Router();

collectionsRouter.get('/collections', setCollections);

export default collectionsRouter;
import express, {json} from 'express';
import cors from 'cors';

import router from './routes/index.js';

const app = express();
app.use(cors());
app.use(json());
app.use(router);

app.listen(process.env.PORT, () => {
    console.log('Servidor no ar na porta', process.env.PORT);
});
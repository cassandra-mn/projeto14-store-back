import db from '../db.js';

export async function addProduct(req, res) {
    const product = req.body;

    try {
        await db.collection('checkout').insertOne(product);
        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}

export async function checkout(req, res) {
    try {
        const products = await db.collection('checkout').find({}).toArray();
        res.send(products);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}
import db from "../db.js";

export async function addProduct(req, res) {
    const product = req.body;
    console.log(product);

    try {
        await db.collection('checkout').insertOne(product);

        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}

export async function checkout(req, res) {
    
    res.sendStatus(200);
}
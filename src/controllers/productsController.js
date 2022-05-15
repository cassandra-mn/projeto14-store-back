import db from '../db.js';

export async function products(req, res) {
    const products = await db.collection('products').find({}).toArray();

    res.send(products);
}

export async function getProduct(req, res) {
    const {id} = req.params;
    
    try {
        const product = await db.collection('products').findOne({code: id});
        res.send(product);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro, tente novamente');
    }
}
import db from '../db.js';

export async function products(req, res) {
    const products = await db.collection('products').find({}).toArray();

    res.send(products);
}
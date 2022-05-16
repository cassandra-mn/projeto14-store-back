import db from '../db.js';

export async function collections(req, res) {
    try {
        const collections = await db.collection('collections').find({}).toArray();
        res.send(collections);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}

export async function getCollection(req, res) {
    const {id} = req.params;
    
    try {
        const products = await db.collection('products').find({collection: id}).toArray();
        res.send(products);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}
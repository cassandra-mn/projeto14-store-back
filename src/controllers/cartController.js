import db from '../db.js';

export async function addProduct(req, res) {
    const product = req.body;
    try {
        const exist = await db.collection('cart').findOne({code: product.code});
        if (exist) return res.sendStatus(403);

        await db.collection('cart').insertOne(product);
        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}

export async function cart(req, res) {
    try {
        const products = await db.collection('cart').find({}).toArray();
        res.send(products);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}

export async function exclude(req, res) {
    const {id} = req.params;
    
    try {
        const product = await db.collection('cart').findOne({code: id});
        if (!product) return res.status(404).send('Produto não encontrado');
        
        await db.collection('cart').deleteOne({code: id});
        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}

export async function update(req, res) {
    const {id} = req.params;
    const data = req.body;

    try {
        const product = await db.collection('cart').findOne({code: id});
        if (!product) return res.status(404).send('Produto não encontrado');
        
        await db.collection('cart').updateOne({code: id}, {$set: data});
        res.sendStatus(200);
    } catch(e) {
        res.status(500).send(e);
    }
}
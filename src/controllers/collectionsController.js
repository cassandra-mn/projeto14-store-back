import db from '../db.js';

export async function setCollections(req, res) {
    const collections = await db.collection('collections').find({}).toArray();

    res.send(collections);
}
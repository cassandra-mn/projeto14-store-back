import joi from 'joi';
import db from '../db.js';
import bcrypt from 'bcrypt';

export async function register(req, res){
    const userSchema = joi.object({
        name: joi.string().required(),
        surname: joi.string(),
        email: joi.string().required().email(),
        password: joi.string().required()
    });

    const {error} = userSchema.validate(req.body, {abortEarly: false});
    if(error){
        return res.status(422).send(error.details.map(detail => detail.message));
    }

    const {name, surname, email, password} = req.body;

    try{
        const user = await db.collection("users").findOne({email: email});
        console.log(user);
        if(user){
            return res.status(409).send("Este email já existe! Tente outro.");
        }else{
            const encryptedPassword = bcrypt.hashSync(password, 10);
            await db.collection("users").insertOne({name, surname, email, password: encryptedPassword});
        }

    } catch(error) {
        console.log(error);
    }

    res.send(req.body);
}
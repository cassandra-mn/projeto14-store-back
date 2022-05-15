import joi from 'joi';
import bcrypt from 'bcrypt';
import db from '../db.js';
import jwt from 'jsonwebtoken';

export async function login(req, res){
    const userSchema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required()
    });
    const {error} = userSchema.validate(req.body, {abortEarly: false});
    if(error){
        return res.status(422).send(error.details.map(detail => detail.message));
    }

    const {email, password} = req.body;
    let token;

    try{
        const user = await db.collection('users').findOne({email: email});
        const passwordVerify = bcrypt.compareSync(password, user.password);

        if(!user || !passwordVerify){
            res.status(401).send('Não autorizado'); 
        }else{
            token = jwt.sign({id: user._id}, process.env.CHAVE_SECRETA);
            
        }

    } catch(error) {
        console.log(error);
    }
    res.send({token: token});
}
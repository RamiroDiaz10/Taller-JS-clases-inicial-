import { verifyEncriptedPassword } from "../helpers/bcrypt.helper.js";
import { generateToken } from "../helpers/jwt.helper.js";
import { dbGetUserByEmail } from "../service/user.service.js";

const loginUser = async ( req, res) => {

      
        const inputData = req.body;

        const userFound = await dbGetUserByEmail(inputData.email);

        if( !userFound ){
            res.json ({ msg: 'Error: usuario no registrado' });
        }

        const userMatch = verifyEncriptedPassword(inputData.password, userFound.password);

        if ( !userMatch ){
            res.json({msg: 'Error: credenciales invalidas'});
        }

        const payload = {
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            role: userFound.role
        }

        const token = generateToken(payload);

        const jsonUserFound = userFound.toObject();

        delete jsonUserFound.password;

        res.json ({
            token,
            user: jsonUserFound,

        });

}

const reNewToken = async(req, res) => {
    const payload = req.payload;

    delete payload.iat;
    delete payload.exp;

    const userFound = await dbGetUserByEmail(payload.email);

        if( !userFound ){
            res.json ({ msg: 'Error: usuario no registrado' });
        }
    
    const token = generateToken ({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        role: userFound.role
    });

    const jsonUserFound = userFound.toObject();

    delete jsonUserFound.password;

    res.json({ 
        token,  
        user: jsonUserFound
    });
}

export {
    loginUser,
    reNewToken
}
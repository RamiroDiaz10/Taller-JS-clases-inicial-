import { verifyToken } from "../helpers/jwt.helper.js";

const authenticationUser = (req, res, next) => {

    try {
        
        const token = req.header ( 'X-Token' );
        if( !token ){
            res.json({ msg: 'Error: Token vacia' });
        }

        const payload = verifyToken(token);
        req.payload = payload;

        next();

    } catch (error) {
        res.json({
            msg: 'Error: Token invalido'
        });
    }

}

export default authenticationUser;
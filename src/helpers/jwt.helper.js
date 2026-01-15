import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
    const token = jwt.sign(
        payload,
        process.env.JWT_SEED ,
        {expiresIn: '1h'}

    );
    console.log('token', token);
    return token;
}

const verifyToken = (token) => {
    return jwt.verify(
        token,
        process.env.JWT_SEED
    );

}

export{
    generateToken,
    verifyToken
}
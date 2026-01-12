import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
    const token = jwt.sign(
        payload,
        'fuckejjeje',
        {expiresIn: '1h'}

    );
    console.log('token', token);
    return token;
}

const verifyToken = (token) => {
    return jwt.verify(
        token,
        'fuckejjeje'
    );

}

export{
    generateToken,
    verifyToken
}
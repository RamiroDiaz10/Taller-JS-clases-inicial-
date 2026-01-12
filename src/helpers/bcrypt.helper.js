import bcrypt from 'bcrypt';

const encryptedPassword = ( passwordUser ) => {
    
    const salt = bcrypt.genSaltSync();
    console.log(salt);

    const hashPassword = bcrypt.hashSync(
        passwordUser,
        salt
    );
    return hashPassword;
}

const verifyEncriptedPassword = (originalPassword, hashPassword) => {

    return bcrypt.compareSync(
        originalPassword,
        hashPassword
    );
}

export {
    encryptedPassword,
    verifyEncriptedPassword
}
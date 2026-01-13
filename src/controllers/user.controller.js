import { dbGetUserByEmail } from "../service/user.service.js";


const createUser = async (req, res) => {
    try {
        const inputData = req.body;

        const userFound = await dbGetUserByEmail


    } catch (error) {
        res.json({
            msg: 'Error: no se puede crear el usuario.'
        });
    }
}
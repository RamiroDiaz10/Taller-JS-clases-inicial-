import userModel from "../models/user.model.js";

const dbRegisterUser = async (newUser) => {
    return await userModel.create(newUser);
}
const dbGetAllUser = async () => {
    return await userModel.find();
}

const dbGetUserById = async (_id) => {
    return await userModel.findOne({_id});
}

const dbGetUserByEmail = async ( email ) => {
    return await userModel.findOne({ email });
}
const dbDeleteUserById = async ( _id) => {
    return await userModel.findOneAndDelete({_id});
}

const dbUserUpdate = async (id, userUpdate) => {
    return await userModel.findByIdAndUpdate (
        id,
        userUpdate,
        { new: true }
    );
}


export {
    dbRegisterUser,
    dbGetAllUser,
    dbGetUserById,
    dbGetUserByEmail,
    dbDeleteUserById,
    dbUserUpdate

}
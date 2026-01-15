import { Schema, model } from "mongoose";
import { ALLOWED_ROLES, ROLES } from "../config/global.config.js";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8 

    },
   role: {
        type: String,
        enum: ALLOWED_ROLES,
        default: ROLES.REGISTERED
    },
    isActive: {
        type: Boolean,
        default: true
    },
    activationCode: {
        type: String,
        trim: true,
        default: null
    }
   
    }, {
    versionKey: false,             
    timestamps: true 
    
});

const userModel = model(
    'users',
    userSchema
);

export default userModel
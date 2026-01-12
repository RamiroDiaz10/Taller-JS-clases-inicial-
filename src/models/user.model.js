import { Schema, model } from "mongoose";

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
        required: true,
        enum: [ 'super-admin', 'admin', 'colaborator', 'registered'  ],
        default: 'registered'
    },
    isActive: {
        type: Boolean,
        default: true

    },
    createDate: {
        type: Date,
        default: new Date().now
    },
        versionKey: false,
        timestamps:true
    
});

const userModel = model(
    'users',
    userSchema
);

export default userModel
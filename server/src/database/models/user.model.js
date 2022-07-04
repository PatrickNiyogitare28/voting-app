import mongoose from "mongoose";
import { registerSchema } from "swaggiffy";

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,

    }
});

registerSchema('User',Schema, {orm: 'mongoose'});
const User = mongoose.model("User", Schema);
export default User;
import mongoose from "mongoose";

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

const User = mongoose.model("User", Schema);
export default User;
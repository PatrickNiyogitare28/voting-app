import mongoose from "mongoose";

const Schema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    }
})

const Candidacy = mongoose.model("Candidacy", Schema);
export default Candidacy;
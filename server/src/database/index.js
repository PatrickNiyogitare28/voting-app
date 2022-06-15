import mongoose from "mongoose";

const db = mongoose.connect('mongodb://localhost:27017/voting-app-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.log(err);
})

export default db;
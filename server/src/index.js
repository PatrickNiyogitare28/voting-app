import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './database';
import authRoute from './routes/auth.routes';
import candidacyRoute from './routes/candidacy.routes';
import usersRoute from './routes/user.routes';

const app = express();

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Voting App API")   
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/candidacy', candidacyRoute);
app.use('/api/v1/users', usersRoute);


const PORT = 5000;
app.listen(PORT, () => {
    console.log("App running on port ...  "+PORT);
})
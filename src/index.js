import express from 'express';
import dbConnection from "./config/mongo.config.js";
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';

const app = express();
const PORT = 3000;

dbConnection();

app.use(express.json());


app.get('/health', (req,res) =>{

    res.json({
        path:'/health',
        msg: 'welcome to creations-kmg'
    });
});


app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute );


app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/health :()`);
});
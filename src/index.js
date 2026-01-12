import express from 'express';
import dbConnection from "./config/mongo.config.js";

const app = express();
const PORT = 3000;

dbConnection();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/health :()`);
});
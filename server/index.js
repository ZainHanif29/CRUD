import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

import connectDB from './config/database.js';


const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());


app.listen(port,()=>{
    connectDB();
    console.log('Server is running this port',port);
})
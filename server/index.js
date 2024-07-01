import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config();

import connectDB from './config/database.js';
import router from './routes/userRoutes.js';


const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use(cookieParser());

app.use('/api',router)


app.listen(port,()=>{
    connectDB();
    console.log('Server is running this port',port);
})
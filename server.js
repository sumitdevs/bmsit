import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/homeRoutes.js';
dotenv.config();
const app = express();
const PORT  = process.env.PORT;
connectDB();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/', router);

app.listen(PORT,()=>{
    console.log('server started on port: 3000');
});
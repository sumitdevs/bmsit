import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import router from './routes/homeRoutes.js';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);import dotenv from 'dotenv';
const app = express();
const PORT  = process.env.PORT;
connectDB();
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/', router);

app.listen(PORT,()=>{
    console.log('server started on port: 3000');
});
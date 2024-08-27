import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import postsRoutes from './routes/clientRoutes.js';

// const ClientRoutes = require('./routes/clientRoutes');

const app = express();

// ensuring post is ok
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors(`http://localhost:3000/`))

app.use('/api', postsRoutes)
// connection string
const CONNECTION_URL='mongodb://localhost:27017/';
const PORT= process.env.PORT || 3001

// checking connection
mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`)))
.catch((error)=>console.log(error.message))


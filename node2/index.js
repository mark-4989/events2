import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

// ensuring post is ok
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))


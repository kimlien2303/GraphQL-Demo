import * as bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import apolloServer from './apollo';

const app = express();
const corsOptions = {
  origin: process.env.CLIENT_ADDRESS || 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())
const morgan = require('morgan');
require('dotenv').config();
app.use(bodyParser.json());
app.use(morgan('dev'));
apolloServer.applyMiddleware({ app, path: "/" });
export default app;
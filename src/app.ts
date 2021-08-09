import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import { router } from '@routes/TodoRoute';
import './database';

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

export default app
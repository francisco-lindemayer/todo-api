import 'dotenv/config'
import express from 'express'
import cors from 'cors';
import { router } from '@routes/todo.route';
import './database';

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

export default app
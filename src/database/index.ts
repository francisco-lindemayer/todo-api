import { Sequelize } from 'sequelize-typescript';
import { TodoModel } from '@models/TodoModel';
const dbConfig = require('../config/db')


const sequelize = new Sequelize(dbConfig);
sequelize.addModels([TodoModel]);

export default sequelize;

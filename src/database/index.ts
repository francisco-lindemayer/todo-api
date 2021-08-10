import { Sequelize } from 'sequelize-typescript';
import { TodoModel } from '@models/TodoModel';
import { TodoEventModel } from '@models/todo-event.model';

const dbConfig = require('../config/db')

const sequelize = new Sequelize(dbConfig);
sequelize.addModels([TodoModel, TodoEventModel]);

export default sequelize;

import { Router } from 'express';
import TodoController from '@controllers/todo.controller';

const router = Router();
const prefix = '/todo';

router.get(`${prefix}`, TodoController.show)

router.get(`${prefix}/:id`, TodoController.index);

router.post(`${prefix}`, TodoController.create);

router.put(`${prefix}/:id`, TodoController.update);

router.patch(`${prefix}/:id/status`, TodoController.changeStatus);

router.delete(`${prefix}/:id`, TodoController.delete);

router.post(`${prefix}/random`, TodoController.generateRandom);

export { router };

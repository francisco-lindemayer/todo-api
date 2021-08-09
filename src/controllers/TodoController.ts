import express from 'express';
import { TodoModel } from '@models/TodoModel';
import { title } from 'process';
import { checkEmail } from 'src/services/email.service';

class TodoController {

  public show = async (request: express.Request, response: express.Response) => {
    try {
      const todos = await TodoModel.findAll({
        order: [['id', 'ASC']]
      });
      return response.status(200).json(todos);
    } catch (error) {
      return response.status(500).json({ error: 'Get todo list failed' });
    }
  }

  public index = async (request: express.Request, response: express.Response) => {
    const { id } = request.params;
    try {
      const todos = await TodoModel.findByPk(id);
      if (!todos) {
        return response.status(404).json({ error: 'Todo not found' });
      }
      return response.status(200).json(todos);
    } catch (error) {
      return response.status(500).json({ error: 'Get todo failed' });
    }
  }

  public create = async (request: express.Request, response: express.Response) => {
    const { title, description, email, name } = request.body;
    try {

      const validatedEmail = await checkEmail(email);

      if (!validatedEmail.valid_email) {
        return response.status(422).json(validatedEmail);
      }

      const todo = await TodoModel.create({ title, description, email, name });

      return response.status(201).json(todo);
    } catch (error) {
      return response.status(500).json({ error: 'To-do create failed', details: error });
    }
  }

  public update = async (request: express.Request, response: express.Response) => {
    const { id } = request.params;
    const { title, description, email, name } = request.body;
    try {
      if (!(await TodoModel.findByPk(id))) {
        return this.create(request, response);
      }

      await TodoModel.update({ title, description, email, name }, { where: { id } });

      return response.status(201).json();
    } catch (error) {
      return response.status(500).json({ error: 'To-do update failed', details: error });
    }
  }

  public delete = async (request: express.Request, response: express.Response) => {
    const { id } = request.params;
    try {
      if (!(await TodoModel.findByPk(id))) {
        return response.status(400).json({ error: 'To-do not found' });
      }

      await TodoModel.destroy({ where: { id } });

      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ error: 'To-do delete failed' });
    }
  }

  public changeStatus = async (request: express.Request, response: express.Response) => {
    const { id } = request.params;
    const { status, password } = request.body;
    const updated_at = new Date();

    try {
      if (!(await TodoModel.findByPk(id))) {
        return response.status(400).json({ error: 'To-do not found' });
      }

      await TodoModel.update({ status }, { where: { id } });

      return response.status(201).json();
    } catch (error) {
      return response.status(500).json({ error: 'To-do change status failed' });
    }
  }

  public generateRandom = async (request: express.Request, response: express.Response) => {
    return null;
  }
}

export default new TodoController();
import { Request, Response } from 'express';
import { TodoModel } from '@models/TodoModel';
import EmailService from 'src/services/email.service';
import TodoRepository from 'src/repositories/todo.repository';
import RandomFacts from 'src/services/facts.service';
import { TodoStatusEnum } from 'src/enum/todo-status.enum';
import { TodoEventModel } from '@models/todo-event.model';

class TodoController {

  public create = async (request: Request, response: Response) => {
    const { description, email, name } = request.body;
    try {
      const validatedEmail = await EmailService.check(email);
      if (!validatedEmail.valid_email) {
        return response.status(422).json(validatedEmail);
      }
      const todo = await TodoRepository.create({ description, email, name })
      return response.status(201).json(todo);
    } catch (error) {
      return response.status(500).json({ error: 'TODO create failed', details: error });
    }
  }

  public show = async (request: Request, response: Response) => {
    try {
      const todos = await TodoRepository.show();
      return response.status(200).json(todos);
    } catch (error) {
      return response.status(500).json({ error: 'Get TODO list failed' });
    }
  }

  public index = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
      const todos = await TodoRepository.index(id);
      if (!todos) {
        return response.status(404).json({ error: 'TODO not found' });
      }
      return response.status(200).json(todos);
    } catch (error) {
      return response.status(500).json({ error: 'Get TODO failed' });
    }
  }

  public update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { description, email, name, status } = request.body;
    try {
      if (!(await TodoRepository.index(id))) {
        return this.create(request, response);
      }
      await TodoRepository.update(id, { description, email, name, status });
      return response.status(201).json();
    } catch (error) {
      return response.status(500).json({ error: 'TODO update failed', details: error });
    }
  }

  public delete = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
      if (!(await TodoRepository.index(id))) {
        return response.status(400).json({ error: 'TODO not found' });
      }
      await TodoRepository.delete(id);
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ error: 'TODO delete failed' });
    }
  }

  public changeStatus = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { status, password } = request.body;
    try {
      const todo = await TodoRepository.index(id);
      if (!(todo)) {
        return response.status(400).json({ error: 'TODO not found' });
      }
      if (status === todo.status) {
        return response.status(422).json({ error: 'TODO already has this status' });
      }
      if (password !== process.env.MANAGER_PASS) {
        return response.status(403).json({ error: 'Invalid password to reopen TODO' });
      }
      if (status === TodoStatusEnum.OPENED) {
        if (!this.haveReopen(todo.event)) {
          return response.status(422).json({ error: 'Limit to reopen TODO reached' });
        }
      }
      await TodoRepository.changeStatus(id, { status })
      return response.status(201).json();
    } catch (error) {
      return response.status(500).json({ error: 'TODO change status failed' });
    }
  }

  public generateRandom = async (request: Request, response: Response) => {
    try {
      const name = 'Eu'
      const email = 'eu@me.com'
      const dogFacts = await RandomFacts.getDogFacts();
      const todos = await Promise.all(dogFacts.map((description) => {
        return TodoRepository.create({ description, email, name });
      }));
      return response.status(201).json(todos);
    } catch (error) {
      return response.status(500).json({ error: 'TODO generate failed' });
    }
  }

  private haveReopen(todoEvents: TodoEventModel[]): boolean {
    const LIMIT_REOPEN = 2;
    return todoEvents.filter(({ status }) => status === TodoStatusEnum.CONCLUDED).length <= LIMIT_REOPEN;
  }
}

export default new TodoController();
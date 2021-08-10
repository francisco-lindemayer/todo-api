import { v4 as uuid } from "uuid";
import { RepositoryBaseInterface } from "src/interfaces/repository-base.interface";
import { TodoStatusEnum } from '../enum/todo-status.enum';
import { TodoModel } from "@models/TodoModel";
import { TodoCreateDTO } from "src/dtos/todo-create.dto";
import { TodoUpdateDTO } from "src/dtos/todo-update.dto";

class TodoRepository implements RepositoryBaseInterface {

  async show() {
    return await TodoModel.findAll({
      order: [['id', 'ASC']]
    });
  }

  async create({ description, email, name }: TodoCreateDTO) {
    const id = uuid();
    return await TodoModel.create({ id, description, email, name });
  };

  async index(id: string) {
    return await TodoModel.findByPk(id);
  }

  async update(id: string, { description, email, name, status }: TodoUpdateDTO) {
    return await TodoModel.update({ description, email, name, status }, { where: { id } });
  }

  delete: () => Promise<any>;

}

export default new TodoRepository()
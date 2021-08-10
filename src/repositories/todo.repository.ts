import { v4 as uuid } from "uuid";
import { RepositoryBaseInterface } from "src/interfaces/repository-base.interface";
import { TodoModel } from "@models/TodoModel";
import { TodoCreateDTO } from "src/dtos/todo-create.dto";

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

  index: () => Promise<any>;

  update: () => Promise<any>;

  delete: () => Promise<any>;

}

export default new TodoRepository()
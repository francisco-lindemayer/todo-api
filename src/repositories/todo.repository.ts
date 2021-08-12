import { v4 as uuid } from "uuid";
import { RepositoryBaseInterface } from "src/interfaces/repository-base.interface";
import { TodoModel } from "@models/TodoModel";
import { TodoEventModel } from "@models/todo-event.model";
import { TodoCreateDTO } from "src/dtos/todo-create.dto";
import { TodoUpdateDTO } from "src/dtos/todo-update.dto";
import TodoEventRepository from "./todo-event.repository";

class TodoRepository implements RepositoryBaseInterface {
  async show() {
    return await TodoModel.findAll({
      order: [['created_at', 'ASC']]
    });
  }

  async create({ description, email, name }: TodoCreateDTO) {
    const id = uuid();
    return await TodoModel.create({ id, description, email, name });
  };

  async index(id: string) {
    return await TodoModel.findByPk(id, {
      include: [{
        model: TodoEventModel,
        order: [['created_at', 'ASC']]
      }],

    });
  }

  async update(id: string, { description, email, name, status }: TodoUpdateDTO) {
    const updatedTodo = await TodoModel.update({ description, email, name, status }, { where: { id } })
      .then(([rowsUpdate, [updateTodo]]) => updateTodo.get());
    return updatedTodo;
  }

  async delete(id: string) {
    return await TodoModel.destroy({ where: { id } });
  }

  async changeStatus(id: string, { status }: TodoUpdateDTO) {
    const updatedTodo = await TodoModel.update({ status }, { where: { id }, returning: true })
      .then(([rowsUpdate, [updateTodo]]) => updateTodo.get());
    await TodoEventRepository.create({ todo_id: id, status });
    return updatedTodo;
  }
}

export default new TodoRepository()
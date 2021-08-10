import { v4 as uuid } from "uuid";
import { RepositoryBaseInterface } from "src/interfaces/repository-base.interface";
import { TodoEventModel } from "@models/todo-event.model";
import { TodoEventUpdateDTO } from "src/dtos/todo-event-create.dto";

class TodoEventRepository implements RepositoryBaseInterface {
  public async create({ status, todo_id }: TodoEventUpdateDTO) {
    const id = uuid();
    await TodoEventModel.create({ id, todo_id, status });
  }
}

export default new TodoEventRepository()
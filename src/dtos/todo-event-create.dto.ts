import { TodoStatusEnum } from "src/enum/todo-status.enum";

export interface TodoEventUpdateDTO {
  todo_id: string;
  status?: keyof TodoStatusEnum
}
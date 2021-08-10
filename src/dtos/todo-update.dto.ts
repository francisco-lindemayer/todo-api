import { TodoStatusEnum } from "src/enum/todo-status.enum";

export interface TodoUpdateDTO {
  description?: string;
  email?: string;
  name?: string;
  status?: keyof TodoStatusEnum
}
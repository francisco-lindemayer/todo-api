import { TodoStatusEnum } from "src/enum/todo-status.enum";

interface TodoIndexDTO {
  description: string;
  email: string;
  name: string;
  status: TodoStatusEnum
}
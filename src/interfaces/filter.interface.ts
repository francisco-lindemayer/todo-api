import { TodoEventModel } from "@models/todo-event.model";
import { Includeable, Model, ModelAttributes, WhereOptions } from "sequelize/types";

export interface FilterBaseInterface {
  include?: Includeable | Includeable[] | undefined;
  where?: WhereOptions
};
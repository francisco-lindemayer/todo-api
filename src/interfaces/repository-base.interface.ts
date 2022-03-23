import { FilterBaseInterface } from "./filter.interface";

export interface RepositoryBaseInterface {
  create?: (resource: any) => Promise<any>;
  show?: () => Promise<any>;
  index?: (id: string, filter: FilterBaseInterface) => Promise<any>;
  update?: (id: string, resource: any) => Promise<any>;
  delete?: (id: string) => Promise<any>;
}
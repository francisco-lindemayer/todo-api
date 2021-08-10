export interface RepositoryBaseInterface {
  create: (resource: any) => Promise<any>;
  show: () => Promise<any>;
  index: (id: string) => Promise<any>;
  update: (id: string, resource: any) => Promise<any>;
  delete: (id: string) => Promise<any>;
}
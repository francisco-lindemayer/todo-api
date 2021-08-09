import { Model, Table, Column, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import Sequelize from 'sequelize/types/lib/sequelize';

@Table({
  tableName: 'todo',
  timestamps: true
})
export class TodoModel extends Model {

  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number

  @Column
  title: string

  @Column
  description: string

  @Column
  email: string

  @Column
  name: string

  @Column
  status: 'OPENED' | 'FINISHED'
}

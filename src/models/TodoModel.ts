import { Model, Table, Column, PrimaryKey, IsUUID, AllowNull, NotEmpty, CreatedAt, UpdatedAt, Default, HasMany, AfterUpdate } from 'sequelize-typescript';
import { TodoEventModel } from '@models/todo-event.model';
import { TodoStatusEnum } from 'src/enum/todo-status.enum';
interface TodoModelInterface {
  id: string;
  description: string;
  email: string;
  name: string;
  status?: keyof TodoStatusEnum
}
@Table({
  tableName: 'todo',
  timestamps: true
})
export class TodoModel extends Model<TodoModelInterface>{

  @PrimaryKey
  @IsUUID(4)
  @Column
  id: string

  @AllowNull(false)
  @NotEmpty
  @Column
  description: string

  @AllowNull(false)
  @NotEmpty
  @Column
  email: string

  @AllowNull(false)
  @NotEmpty
  @Column
  name: string

  @AllowNull(false)
  @NotEmpty
  @Default('OPENED')
  @Column
  status?: 'OPENED' | 'CONCLUDED'

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @HasMany(() => TodoEventModel)
  event: TodoEventModel[]
}

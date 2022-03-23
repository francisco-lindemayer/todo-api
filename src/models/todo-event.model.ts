import { Model, Table, Column, PrimaryKey, ForeignKey, IsUUID, AllowNull, NotEmpty, CreatedAt, UpdatedAt, Default, HasMany, BelongsTo } from 'sequelize-typescript';
import { TodoModel } from '@models/todo.model';
import { TodoStatusEnum } from 'src/enum/todo-status.enum';

interface TodoEventModelInterface {
  id: string;
  todo_id: string;
  status?: keyof TodoStatusEnum
}

@Table({
  tableName: 'todo_event',
  timestamps: true
})
export class TodoEventModel extends Model<TodoEventModelInterface>{

  @PrimaryKey
  @IsUUID(4)
  @Column
  id: string

  @ForeignKey(() => TodoModel)
  @IsUUID(4)
  @Column
  todo_id: string

  @AllowNull(false)
  @NotEmpty
  @Column
  status: 'OPENED' | 'CONCLUDED'

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @BelongsTo(() => TodoModel)
  todo: TodoModel
}

import { Model, Table, Column, PrimaryKey, IsUUID, AllowNull, NotEmpty, CreatedAt, UpdatedAt, Default } from 'sequelize-typescript';
import { v4 } from 'uuid';
interface TodoModelInterface {
  id: string;
  description: string;
  email: string;
  name: string;
  status?: 'OPENED' | 'CONCLUDED'
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
}

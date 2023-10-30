import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user') // 表名
export class User {
  @PrimaryGeneratedColumn() // 自增主键
  id: number;

  @Column() // 字段
  userName: string;

  @Column() // 字段
  password: string;

  @Column() // 字段
  userId: number;
}

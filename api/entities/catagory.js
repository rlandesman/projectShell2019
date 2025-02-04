/* eslint-disable import/no-cycle */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import ToDo from './todo';

@Entity()
export default class Catagory {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar' })
  title

  @OneToMany(() => ToDo, (todo) => todo.catagory)
  todos
}

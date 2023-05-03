import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true, type: 'bigint' })
  createdAt: number;

  @Column({ nullable: true, type: 'bigint' })
  updatedAt: number;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.id = uuidv4();
  }

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date().getTime();
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date().getTime();
  }
}

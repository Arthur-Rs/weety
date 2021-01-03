import { 
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn 
} from "typeorm";

import { Exclude } from 'class-transformer'

import UserModel from "../models/entities/UserModel";

@Entity({ name: 'users' })
class User implements UserModel{
  @PrimaryColumn()
  id: string

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  biography: string

  @Column()
  email: string

  @Column()
  @Exclude()
  password: string

  @Column()
  birth_date: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
  user: Promise<string>;
}

export default User
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/index';

export interface UserRepository extends Repository<User> {
  this: Repository<User>;
  getData(): Promise<User[]>;
  getByid(id: number): Promise<User>;
  createData(user: CreateUserDto);
}

export const UserRepository: Pick<UserRepository, any> = {
  getByid(this: Repository<User>, id) {
    return this.findOne({ where: { id } });
  },

  getData(this: Repository<User>) {
    return this.find();
  },

  createData(this: Repository<User>, user) {
    return this.save(user);
  },
};

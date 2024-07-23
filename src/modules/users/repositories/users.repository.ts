import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { randomUUID } from 'node:crypto';

@Injectable()
export class UsersRepository {
  private users: any[] = [];

  create(user: CreateUserDto) {
    const formatUser = {
      email: user.email,
      name: user.name,
      id: randomUUID(),
    };

    this.users.push(formatUser);

    return formatUser;
  }

  findAll() {
    return this.users;
  }

  updateById(id: string, data: UpdateUserDto) {
    const user = this.users.find((user) => user.id == id);

    user.email = data.email;
    user.name = data.name;

    return user;
  }

  deleteById(id: string) {
    const index = this.users.findIndex((user) => user.id == id);
    this.users.splice(index, 1);
  }
}

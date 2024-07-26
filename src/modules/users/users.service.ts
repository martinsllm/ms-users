import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}
  create(user: CreateUserDto) {
    return this.repository.create(user);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, data: UpdateUserDto) {
    return this.repository.updateById(id, data);
  }

  delete(id: string) {
    return this.repository.deleteById(id);
  }
}

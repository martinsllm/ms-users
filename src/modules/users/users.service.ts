import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { PubSubService } from '../global/pubsub/pubsub.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly repository: UsersRepository,
    private readonly pubSubService: PubSubService,
  ) {}
  async create(user: CreateUserDto) {
    const userCreated = await this.repository.create(user);

    await this.pubSubService.publish('user-created', userCreated, 'users');

    return userCreated;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async update(id: string, data: UpdateUserDto) {
    return await this.repository.updateById(id, data);
  }

  async delete(id: string) {
    return await this.repository.deleteById(id);
  }
}

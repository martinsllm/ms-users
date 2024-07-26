import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: CreateUserDto) {
    const formatUser = {
      email: user.email,
      name: user.name,
    };

    await this.prismaService.users.create({
      data: formatUser,
    });

    return formatUser;
  }

  async findAll() {
    return await this.prismaService.users.findMany();
  }

  async findOne(id: string) {
    const user = await this.prismaService.users.findFirst({
      where: {
        id,
      },
    });

    if (!user) throw new NotFoundException();

    return user;
  }

  async updateById(id: string, data: UpdateUserDto) {
    await this.findOne(id);

    const user = await this.prismaService.users.update({
      where: {
        id,
      },
      data,
    });

    return user;
  }

  async deleteById(id: string) {
    await this.findOne(id);

    return await this.prismaService.users.delete({
      where: {
        id,
      },
    });
  }
}

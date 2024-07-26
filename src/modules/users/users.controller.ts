import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import {
  ApiDocGenericPost,
  ApiDocGenericPatch,
  ApiDocGenericGetAll,
  ApiDocGenericDelete,
  ApiDocGenericGetOne,
} from 'src/app/common';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiDocGenericPost('user', CreateUserDto)
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Get()
  @ApiDocGenericGetAll('user', CreateUserDto)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiDocGenericGetOne('user', CreateUserDto)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiDocGenericPatch('user', UpdateUserDto)
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  @ApiDocGenericDelete('user')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}

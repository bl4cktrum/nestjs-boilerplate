import { HttpException, HttpStatus, Injectable, Response } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from "./user.repository";
import { User } from "./entities/user.entity";
import { plainToClass } from "class-transformer";
import { ApiResponse } from "../../infrastructure/responses/ApiResponse";
import { ApiException } from "../../infrastructure/exceptions/api.exception";

@Injectable()
export class UserService {
  constructor(private usersRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create({
      ...plainToClass(User, createUserDto)
    });
    return await this.usersRepository.save(user)
  }

  async findAll() {
    return await this.usersRepository.find()
  }

  async findOne(id: string) {
    return await this.usersRepository.findOneByOrFail({id:id})

  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneByOrFail({ id: id });
    const userToSave = this.usersRepository.create({
      ...user,
      ...plainToClass(User,updateUserDto, {exposeUnsetFields: false})
    });
    userToSave.tempPassword = user.tempPassword;
    let data = await this.usersRepository.save(userToSave);
    return ApiResponse.success().setData(data)
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOneByOrFail({id: id});
    await this.usersRepository.softDelete(id);
    return ApiResponse.success().setData(user);
  }
}

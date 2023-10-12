import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserRepository } from "./user.repository";
import { User } from "./entities/user.entity";
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService {
  constructor(private usersRepository: UserRepository) {
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create({
      ...plainToClass(User, createUserDto)
    });
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    return await this.usersRepository.findOneByOrFail({ id: id });
  }

  async findOneByEmailOrFail(email: string) {
    return await this.usersRepository.findOneByOrFail({ email: email });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneByOrFail({ id: id });
    const userToSave = this.usersRepository.create({
      ...user,
      ...plainToClass(User, updateUserDto, { exposeUnsetFields: false })
    });
    userToSave.tempPassword = user.tempPassword;
    return await this.usersRepository.save(userToSave);
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOneByOrFail({ id: id });
    return await this.usersRepository.softDelete(id);
  }
}

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from "./user.repository";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./entities/user.entity";

@Module({
  imports:[TypeOrmModule.forFeature([User])], // register entity repository
  controllers: [UserController],
  providers: [UserService, UserRepository],
  // exports: [UserService, UsersRepository] // add this only if you use service and/or custom repo within another module/service
})
export class UserModule {}

import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(@InjectRepository(User)
              private userRepo: Repository<User>) {
    super(userRepo.target, userRepo.manager, userRepo.queryRunner)
  }
}

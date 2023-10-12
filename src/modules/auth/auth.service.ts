import { Injectable } from '@nestjs/common';
import { UserService } from "../user/user.service";
import { compare } from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/entities/user.entity";

@Injectable()
export class AuthService {

  constructor(private userService: UserService,
              private jwtService: JwtService) {
  }

  async validateUser(email: string, password: string){
    const user = await this.userService.findOneByEmailOrFail(email);
    if (await compare(password,user.password)){
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

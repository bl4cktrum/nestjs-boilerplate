import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from './auth.service';
import { ApiTags } from "@nestjs/swagger";
import { LoginDto } from "./dto/login.dto";
import { JwtAuth } from "../../infrastructure/decorators/jwt.decorator";
import { AuthGuard } from "@nestjs/passport";
import { ApiResponse } from "../../infrastructure/responses/ApiResponse";
import { LoggedUser } from "../../infrastructure/decorators/logged-user.decorator";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Authenticates a user
   */
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() request: LoginDto, @LoggedUser() user) {
    return ApiResponse.success().setData(await this.authService.login(user))
  }

  @JwtAuth()
  @Get('protected')
  async protected(@LoggedUser() user){
    console.log(user);
    return ApiResponse.success()
  }
}

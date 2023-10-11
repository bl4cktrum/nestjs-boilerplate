import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from "@nestjs/common";
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from "@nestjs/swagger";
import { ApiResponse } from "../../infrastructure/responses/ApiResponse";

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  /**
   * Creates user
   */
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return ApiResponse.success('User created successfully',HttpStatus.CREATED).setData(await this.usersService.create(createUserDto));
  }

  /**
   * Gets all users
   */
  @Get()
  async findAll() {
    return ApiResponse.success().setData(await this.usersService.findAll())
  }

  /**
   * Gets user with specified id
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return ApiResponse.success().setData(await this.usersService.findOne(id))
  }

  /**
   * Updates user with specified id
   */
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return ApiResponse.success('User updated successfully').setData(await this.usersService.update(id, updateUserDto))
  }

  /**
   * Deletes user with specified id
   */
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return ApiResponse.success('User removed successfully').setData(await this.usersService.remove(id));
  }
}

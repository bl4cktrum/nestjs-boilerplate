import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  password: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  first_name: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  last_name: string;
}

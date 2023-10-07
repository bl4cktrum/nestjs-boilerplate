import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  /**
   * User's email
   * @example nest-js@boiler.plate
   */
  @IsEmail()
  email: string;

  /**
   * User's password
   * @example p4ssw0rd!
   */
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  password: string;

  /**
   * User's first name
   * @example firstName
   */
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  first_name: string;

  /**
   * User's last name
   * @example lastName
   */
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  last_name: string;
}

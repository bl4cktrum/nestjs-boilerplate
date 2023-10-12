import { IsNotEmpty } from "class-validator";

export class LoginDto {
  /**
   * User's email
   * @example nest-js@boiler.plate
   */
  @IsNotEmpty()
  email: string;

  /**
   * User's password
   * @example p4ssw0rd!
   */
  @IsNotEmpty()
  password: string;
}

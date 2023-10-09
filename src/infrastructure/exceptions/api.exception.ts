import { HttpException, HttpStatus } from "@nestjs/common";
export class ApiException extends HttpException {
  constructor(message: string = 'Operation could not completed', status: number = HttpStatus.BAD_REQUEST) {
    super(message, status);
  }
}

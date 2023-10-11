import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { EntityNotFoundError } from "typeorm";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof EntityNotFoundError ? 404
        : (exception instanceof HttpException ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR);

    let responseBody = {
      success: false,
      status_code: status,
      message: "Operation could not complete",
      data: {
        errors: (exception instanceof EntityNotFoundError) ? [exception.message]
          : (exception instanceof BadRequestException) ? exception.getResponse()["message"]
            : exception instanceof Error ? exception.message : null
      }
    };

    if (process.env.NODE_ENV !== 'prod' && exception instanceof Error)
      Object.assign(responseBody.data,{
        ...responseBody.data,
        stack: exception.stack
      })
    response.json(responseBody);
  }
}

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express"

@Catch()
export class AllExceptionFilter implements ExceptionFilter{
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    response
      .json({
        success: false,
        status_code: status,
        message: (exception instanceof HttpException && typeof exception.getResponse() === 'string') ? exception.getResponse()
          : (exception instanceof HttpException && typeof exception.getResponse() === 'object') ? exception.getResponse()['message']
            : (exception instanceof Error ? exception.message : null)
      });
  }
}

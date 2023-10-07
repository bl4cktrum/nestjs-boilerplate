import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor implements NestInterceptor{
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    return next.handle().pipe(
      catchError((err) => throwError(()=>{
        if (err instanceof Error) {
          if (err.name == 'EntityNotFoundError')
            throw new HttpException(err.message, 404)
          // Other exceptions will come here

          return err
        }
      }))
    );
  }

}

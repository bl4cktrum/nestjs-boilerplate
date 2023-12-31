import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const LoggedUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  return context.switchToHttp().getRequest().user
})

import { applyDecorators } from "@nestjs/common";
import { ApiHideProperty } from "@nestjs/swagger";
import { Exclude as DefaultExclude }  from "class-transformer"

export function Exclude(options: {toPlainOnly?: boolean, toClassOnly?: boolean}){
  return applyDecorators(
    DefaultExclude(options),
    ApiHideProperty()
  )
}

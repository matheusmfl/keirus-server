import {  IsOptional, Length } from "class-validator"

export class updateUserBody{


  @IsOptional()
  @Length(5)
  email: string

  @IsOptional()
  @Length(8)
  password: string

  @IsOptional()
  @Length(4)
  name: string
 
}
import { IsDate, IsNotEmpty, IsOptional, IsUUID, Length } from "class-validator"

export class createUserBody{

  @IsUUID()
  @IsOptional()
  id: string

  @IsNotEmpty()
  @Length(5)
  email: string

  @IsNotEmpty()
  @Length(8)
  password: string

  @IsNotEmpty()
  name: string
  
  @IsDate()
  @IsOptional()
  created_at: Date

  @IsDate()
  @IsOptional()
  last_access: Date
  
  @IsNotEmpty()
  role: 'USER' | 'ADMIN' | 'SUPER_ADMIN'
}
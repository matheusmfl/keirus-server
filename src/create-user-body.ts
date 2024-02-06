import { IsDate, IsNotEmpty, IsUUID, Length } from "class-validator"

export class createUserBody{
  @IsNotEmpty()
  @IsUUID()
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
  created_at: Date

  @IsDate()
  last_access: Date
  
  @IsNotEmpty()
  role: 'USER' | 'ADMIN' | 'SUPERADMIN'
}
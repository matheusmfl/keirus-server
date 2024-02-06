import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUser } from 'src/app/use-cases/register-user';
import { createUserBody } from '../dtos/create-user-body';

@Controller('users')
export class UsersController {
  constructor(
    private registerUser: RegisterUser
  ){}
  

  // @Get()
  // list() {
  //   return this.prisma.user.findMany();
  // }

  @Post()
  async create(@Body() body: createUserBody){
    const {created_at, email, name, password, role} = body


    const { user } = await this.registerUser.execute({
      email, password, role, created_at, name
    })

    return user

  }
}

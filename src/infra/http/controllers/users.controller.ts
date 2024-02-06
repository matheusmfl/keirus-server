import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterUser } from 'src/app/use-cases/register-user';
import { createUserBody } from '../dtos/create-user-body';
import { ListUsers } from 'src/app/use-cases/list-users';
import { UserViewModel } from '../view-models/user-view-model';


@Controller('users')
export class UsersController {
  constructor(
    private registerUser: RegisterUser,
    private listUsers: ListUsers
  ){}
  

  @Get()
  async list() {
    return this.listUsers.execute()
  }

  @Post()
  async create(@Body() body: createUserBody){
    const {created_at, email, name, password, role} = body


    const { user } = await this.registerUser.execute({
      email, password, role, created_at, name
    })

    return {
      user: UserViewModel.toHTTP(user)
    }

  }
}

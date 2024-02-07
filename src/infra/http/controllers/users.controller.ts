import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RegisterUser } from 'src/app/use-cases/register-user';
import { createUserBody } from '../dtos/create-user-body';
import { ListUsers } from 'src/app/use-cases/list-users';
import { UserViewModel } from '../view-models/user-view-model';
import { updateUserBody } from '../dtos/update-user-body';
import { UpdateUserUseCase } from '@app/use-cases/update-user';


@Controller('users')
export class UsersController {
  constructor(
    private registerUser: RegisterUser,
    private listUsers: ListUsers,
    private updateUser: UpdateUserUseCase
  ){}
  

  @Get()
  async list() {
    return this.listUsers.execute()
  }

  @Patch(':userId')
  async update(@Param() params: {userId: string} , @Body() body: updateUserBody){
    const {name, email, password} = body
    const {userId} = params

    const { user } = await this.updateUser.execute({userId, data: {name, email, password}})

    return {
      user: UserViewModel.toHTTP(user)
    }
   
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

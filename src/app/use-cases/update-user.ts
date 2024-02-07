import { Injectable } from "@nestjs/common"
import { User } from "../entities/user"
import { IUserUpdateData, UserRepository } from "../repositories/user-repository"





interface IUpdateUserResponse {
  user: User
}
interface IUpdateUserUseCase {
  userId: string
  data: IUserUpdateData
}

@Injectable()
export class UpdateUserUseCase{
  constructor(
    private userRepository: UserRepository
  ){

  }
  async execute(request: IUpdateUserUseCase): Promise<IUpdateUserResponse>{
    const {userId, data} = request


    const user = await this.userRepository.update(userId, data)

    return { user }
  }

}
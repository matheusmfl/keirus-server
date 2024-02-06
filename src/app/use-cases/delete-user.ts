import { Injectable } from "@nestjs/common"
import { UserRepository } from "../repositories/user-repository"


interface IDeleteUserUseCaseRequest {
  userId: string
}



@Injectable()
export class DeleteUserUseCase{
  constructor(
    private userRepository: UserRepository
  ){

  }
  async execute({userId}: IDeleteUserUseCaseRequest): Promise<void>{
 
    const userSuperAdmin = await this.userRepository.userIsSuperAdmin(userId)

    if (userSuperAdmin){
      throw new Error('Not Authorized')
    }

    await this.userRepository.delete(userId)

    return 
  }

}
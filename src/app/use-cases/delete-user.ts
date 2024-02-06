import { Injectable } from "@nestjs/common"
import { UserRepository } from "../repositories/user-repository"


interface IDeleteUserUseCaseRequest {
  userId: string
  email: string
}



@Injectable()
export class DeleteUserUseCase{
  constructor(
    private userRepository: UserRepository
  ){

  }
  async execute({userId}: IDeleteUserUseCaseRequest): Promise<void>{
 


    await this.userRepository.delete(userId)

    return 
  }

}
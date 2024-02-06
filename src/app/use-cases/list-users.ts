import { Injectable } from "@nestjs/common"
import { User } from "../entities/user"
import { UserRepository } from "../repositories/user-repository"

@Injectable()
export class ListUsers{
  constructor(
    private userRepository: UserRepository
  ){

  }
  async execute(): Promise<User[]>{

    const users = this.userRepository.getUsers()

    return  users 
  }

}
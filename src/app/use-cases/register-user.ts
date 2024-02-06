import { User } from "../entities/user"
import { UserPassword } from "../entities/user-password"
import { UserRepository } from "../repositories/user-repository"

interface IRegisterUserRequest {
  name: string
  email: string
  password: string
  created_at?: Date
  role: 'USER' | 'ADMIN' | 'SUPERADMIN'
}

interface IRegisterUserResponse {
  user: User
}


export class RegisterUser{
  constructor(
    private userRepository: UserRepository
  ){

  }
  async execute(request: IRegisterUserRequest): Promise<IRegisterUserResponse>{
    const {email, name, password, role, created_at} = request

    const user = new User({
      email, name, password: new UserPassword(password), role, created_at
    })

    await this.userRepository.register(user)

    return { user }
  }

}
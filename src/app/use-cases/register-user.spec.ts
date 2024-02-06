
import { InMemoryUserRepository } from "../../../test/in-memory-user-repository"
import { RegisterUser } from "./register-user"

describe('Register user', () => {
  let userRepository: InMemoryUserRepository
  let registerUserUseCase: RegisterUser

  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    registerUserUseCase = new RegisterUser(userRepository)

  })

  it('should be able to register a user', async () => {

    await registerUserUseCase.execute({
      email: 'keirus@admin.com',
      name: 'Keirus Admin',
      password: 'KeirusAdminPass1@',
      role: 'SUPERADMIN',
    })

    expect(userRepository.items).toHaveLength(1)
  })
})
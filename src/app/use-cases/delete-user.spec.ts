import { User } from "../entities/user"
import { InMemoryUserRepository } from "../../../test/in-memory-user-repository"
import { DeleteUserUseCase } from "./delete-user"
import { UserPassword } from "../entities/user-password"

describe('Delete user', () => {
  let userRepository: InMemoryUserRepository
  let deleteUserUseCase: DeleteUserUseCase

  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    deleteUserUseCase = new DeleteUserUseCase(userRepository)

  })

  it('should be able to delete a user', async () => {

    const fakeUser = new User({
      id: 'id-generic',
      email: 'keirus@admin.com',
      name: 'Keirus Admin',
      password: new UserPassword('KeirusAdminPass1@'),
      role: 'ADMIN',
    })
    
    userRepository.items.push(fakeUser)

    await deleteUserUseCase.execute({userId: 'id-generic'})
    

    expect(userRepository.items).toHaveLength(0)
  })
})
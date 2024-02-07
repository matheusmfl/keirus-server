
import { UserPassword } from "@app/entities/user-password"
import { InMemoryUserRepository } from "../../../test/in-memory-user-repository"
import {  UpdateUserUseCase } from "./update-user"
import { User } from "@app/entities/user"

describe('Update user UseCase', () => {
  let userRepository: InMemoryUserRepository
  let updateUserUseCase: UpdateUserUseCase

  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    updateUserUseCase = new UpdateUserUseCase(userRepository)

  })

  it('should be able to update a user', async () => {

    const fakeUser = new User({
      id: 'id-generic',
      email: 'keirus@admin.com',
      name: 'Keirus Admin',
      password: new UserPassword('KeirusAdminPass1@'),
      role: 'ADMIN',
    })
    
    userRepository.items.push(fakeUser)
    
    const user = updateUserUseCase.execute({
      userId: 'id-generic', 
      data: {
        name: 'Matheus Fonteles'
      }
    })


    expect(userRepository.items).toHaveLength(1)
  })
})
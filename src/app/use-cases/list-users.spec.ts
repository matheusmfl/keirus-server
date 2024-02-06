import { InMemoryUserRepository } from "../../../test/in-memory-user-repository"
import { ListUsers } from "./list-users"

describe('Get users', () => {
  let userRepository: InMemoryUserRepository
  let listUsersUseCase: ListUsers

  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    listUsersUseCase = new ListUsers(userRepository)

  })

  it('should be able to list users', async () => {
    

    const users = await listUsersUseCase.execute()

    expect(users[0].email).toEqual(expect.any(String))
  })
})
import { User } from "./user"
import { UserPassword } from "./user-password"

describe('User ', () => {
  it('should be able to create a user', () => {
   
    const user = new User({
      email: 'keirus@admin.com',
      name: 'Keirus Admin',
      password: new UserPassword('KeirusAdminPass1@'),
      role: 'SUPER_ADMIN',
      last_access: undefined
    })

    expect(user).toBeTruthy()
  })
})
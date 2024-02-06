import { UserPassword } from "./user-password"

describe('User-password test ', () => {
  it('should be able to create a new password', () => {
    const password = new UserPassword('KeirusAdminPass1@')

    expect(password).toBeTruthy()
  })


  it('should be not able to create a new password with less than 8 characters, that does not have a number and that does not have a symbol', () => {
    

    expect(() => {
      new UserPassword('keirusAdminPass1')
    }).toThrow()
  })
})
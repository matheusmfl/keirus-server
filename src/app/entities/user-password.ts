export class UserPassword {
  private readonly password: string

  get value(): string {
    return this.password
  }

  private validatePassword(password: string): boolean{
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;

    return passwordRegex.test(password);
  }

  constructor(password: string) {
    const isPasswordValid = this.validatePassword(password)

    if(!isPasswordValid) {
      throw new Error('Passwords must contain at least 8 characters, including a number, a symbol, and an uppercase letter')
  }

  this.password = password
}
}
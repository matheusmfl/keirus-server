import { User } from "../src/app/entities/user";
import { UserPassword } from "../src/app/entities/user-password";
import { UserRepository } from "../src/app/repositories/user-repository";

export class InMemoryUserRepository implements UserRepository{




  public items: User[] = []

  async findByEmail(email: string){
    const user = this.items.find((user) => user.email === email)

    if (!user){
      return null
    }
    return user
  }

  async delete(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async listUsers(): Promise<User[]> {
    const fakeUser = new User({
      email: 'fake@example.com',
      name: 'fake Name',
      password: new UserPassword('fake_Password1@'),
       role: 'SUPER_ADMIN',
       created_at: new Date(),
       last_access: new Date()
    })
    this.items.push(fakeUser)
   return this.items
  }

  async register(user: User): Promise<void> {
    
    this.items.push(user)
    
    return
  }

}
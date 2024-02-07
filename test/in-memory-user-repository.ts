import { User } from "../src/app/entities/user";
import { UserPassword } from "../src/app/entities/user-password";
import { IUserUpdateData, UserRepository } from "../src/app/repositories/user-repository";

export class InMemoryUserRepository implements UserRepository{


  public items: User[] = []

  async update(userId: string, data: IUserUpdateData): Promise<User> {
    const userIndex = this.items.findIndex(user => user.id === userId)

 
    const userUpdated = new User({
      email: data.email ?? 'updatedEmail@gmail.com',
      password: new UserPassword('updated-password') ,
      name: data.name ?? 'User Name Updated', 
      role: 'ADMIN',
      id: 'updated-user-id',
    })

    this.items.splice(userIndex, 1, userUpdated)

    return userUpdated
   
  }

  async userIsSuperAdmin(userId: string): Promise<boolean> {
    const user = this.items.find((user) => user.id === userId)

    if(user?.role === 'SUPER_ADMIN'){
      return true
    }
    else {
      return false
    }
  }

  async findByEmail(email: string){
    const user = this.items.find((user) => user.email === email)

    if (!user){
      return null
    }
    return user
  }

  async delete(userId: string): Promise<void> {
    const userIndex = await this.items.findIndex(item => item.id === userId)

    if(userIndex === -1){
      return
    }

    this.items.splice(userIndex, 1)

    return
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
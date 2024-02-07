import { User } from "../entities/user";

export interface IUserUpdateData {
  name?: string
  email?: string
  password?: string
}



export abstract class UserRepository {
  abstract register(user: User): Promise<void>
  abstract listUsers(): Promise<User[]>
  abstract delete(userId: string): Promise<void>
  abstract findByEmail(email: string): Promise<User | null>
  abstract userIsSuperAdmin(userId: string): Promise<boolean>
  abstract update(userId: string, data: IUserUpdateData): Promise<User>
}
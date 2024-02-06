import { User } from "../entities/user";

export abstract class UserRepository {
  abstract register(user: User): Promise<void>
  abstract getUsers(): Promise<User[]>
}
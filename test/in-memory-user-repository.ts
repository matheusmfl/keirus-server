import { User } from "src/app/entities/user";
import { UserRepository } from "src/app/repositories/user-repository";

export class InMemoryUserRepository implements UserRepository{

  public items: User[] = []

  async register(user: User): Promise<void> {
    this.items.push(user)
    return
  }

}
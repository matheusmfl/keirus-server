import { User } from "src/app/entities/user";

export class UserViewModel {
  static toHTTP(user: User){
    return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    created_at: user.created_at
    }
  }
}
import { Role } from "@prisma/client";
import { User } from "src/app/entities/user";

export class PrismaUserMapper {
  static toPrisma(user: User){
    return {
        id: user.id,
        created_at: user.created_at,
        email: user.email,
        name: user.name,
        role: user.role as Role,
        password: user.password.value,    
        last_access: new Date(),      
    }
  }


  static toUser(prismaUser: any): User {
    
    return new User({
      id: prismaUser.id,
      email: prismaUser.email,
      password: prismaUser.password, 
      name: prismaUser.name,
      created_at: prismaUser.created_at,
      last_access: prismaUser.last_access,
      role: prismaUser.role,
    });
  }
}
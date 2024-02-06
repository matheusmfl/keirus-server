import { User } from "src/app/entities/user";
import { UserRepository } from "../../../../app/repositories/user-repository";
import { PrismaService } from "../prisma.service";
import { Role } from "@prisma/client";

export class PrismaUsersRepository implements UserRepository {
  constructor(
    private prismaService: PrismaService
  ){}

  async register(user: User): Promise<void> {
   await this.prismaService.user.create({
    data: {
      id: user.id,
      created_at: user.created_at,
      email: user.email,
      name: user.name,
      role: user.role as Role,
      password: user.password.value,    
      last_access: new Date(),      
    }
   })
  }

}
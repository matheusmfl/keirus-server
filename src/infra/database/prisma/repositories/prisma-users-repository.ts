import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../../../app/repositories/user-repository";
import { PrismaService } from "../prisma.service";
import { User } from "src/app/entities/user";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";



@Injectable()
export class PrismaUsersRepository implements UserRepository {
  constructor(
    private prismaService: PrismaService
  ){}
  async findByEmail(email: string): Promise<User | null> {
    const userPrisma = await this.prismaService.user.findUnique({
      where: {
        email
      } 
    })

    if(!userPrisma){
      return null
    }
    const user = PrismaUserMapper.toUser(userPrisma)

    return user
  }
  
  delete(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async listUsers(): Promise<User[]> {
   
    const usersFromPrisma = await this.prismaService.user.findMany({});
    const users = usersFromPrisma.map(PrismaUserMapper.toUser);

   return users 
  }

  async register(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user)

   await this.prismaService.user.create({
    data: raw
   })
  }

}
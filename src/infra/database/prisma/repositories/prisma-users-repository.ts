import { Injectable } from "@nestjs/common";
import { IUserUpdateData, UserRepository } from "../../../../app/repositories/user-repository";
import { PrismaService } from "../prisma.service";
import { User } from "src/app/entities/user";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";



@Injectable()
export class PrismaUsersRepository implements UserRepository {
  constructor(
    private prismaService: PrismaService
  ){}

  async update(userId: string, data: IUserUpdateData): Promise<User> {
    const userPrisma = await this.prismaService.user.update({
      where: {id: userId},
      data: {
        email: data.email,
        name: data.name,
        password: data.password  
      }
    })

    const user = PrismaUserMapper.toUser(userPrisma)

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const userPrisma = await this.prismaService.user.findUnique({
      where: {
        email: email
      } 
    })

    if(!userPrisma){
      return null
    }
    const user = PrismaUserMapper.toUser(userPrisma)

    return user
  }

  async userIsSuperAdmin(userId: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId
      }
    })

    if(user?.role === 'SUPER_ADMIN'){
      return true
    }
    else return false
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
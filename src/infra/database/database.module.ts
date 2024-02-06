import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { UserRepository } from "src/app/repositories/user-repository";
import { PrismaUsersRepository } from "./prisma/repositories/prisma-users-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository
    }
  ],
  exports: [
    UserRepository
  ]
})
export class DatabaseModule {}
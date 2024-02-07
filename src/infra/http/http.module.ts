import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/users.controller";
import { RegisterUser } from "src/app/use-cases/register-user";
import { DatabaseModule } from "../database/database.module";
import { ListUsers } from "src/app/use-cases/list-users";
import { UpdateUserUseCase } from "@app/use-cases/update-user";

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    RegisterUser,
    ListUsers,
    UpdateUserUseCase
  ]
})
export class HttpModule{}
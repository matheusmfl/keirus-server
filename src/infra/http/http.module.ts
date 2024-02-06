import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/users.controller";
import { RegisterUser } from "src/app/use-cases/register-user";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    RegisterUser
  ]
})
export class HttpModule{}
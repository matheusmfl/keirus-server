import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Controller('auth')
export class UsersController {
  

  // @Get()
  // list() {
  //   return this.prisma.user.findMany();
  // }

  @Post()
  async create(@Body() body: any){
    const {} = body
    
  

  }
}

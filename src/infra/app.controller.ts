import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/prisma.service';

@Controller('auth')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.user.findMany();
  }

  @Post()
  async create(@Body() body: any){
    const {} = body
    
    await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name: 'Matheus Fonteles',
        email: 'matheusfonteles@gmail.com',
        password: '123456',
        role: 'SUPER_ADMIN',
        created_at: new Date(),
        last_access: new Date()
      }
    })
  }
}

import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { AuthGuard } from '../../auth/auth.guard';
import { LoginDto } from '../dtos/login';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
  
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
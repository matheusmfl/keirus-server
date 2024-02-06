
import { UserRepository } from '@app/repositories/user-repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserPassword } from '@app/entities/user-password';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository, 
    private jwtService: JwtService
    
    ) {}

  async signIn(email: string, pass: UserPassword): Promise<any> {
    const user = await this.userRepository.findByEmail(email)

    if(!user){
      throw new Error('User not found')
    }
    if (user.password !== pass) {
      throw new UnauthorizedException();
    }

   
    const payload = { sub: user.email, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
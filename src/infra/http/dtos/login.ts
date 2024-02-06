import { UserPassword } from '@app/entities/user-password';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'O campo "username" não pode estar vazio' })
  @IsString({ message: 'O campo "username" deve ser uma string' })
  email: string;

  @IsNotEmpty({ message: 'O campo "password" não pode estar vazio' })
  @IsString({ message: 'O campo "password" deve ser uma string' })
  password: UserPassword;
}
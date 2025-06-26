import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRegisterInput } from './dto/register.input';
import { CreateLoginInput } from './dto/login.input';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: CreateRegisterInput) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: CreateLoginInput) {
    return this.authService.login(loginDto);
  }
}

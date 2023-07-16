import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // Best practice
export class AuthController {
  // We do so, in order to avoid having to instanciate a new instance of the class everytime
  constructor(private authService: AuthService) {}

  /* Creating the end points for login and signup */
  // Sign Up
  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  // Sign In
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}

import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('token/authenticate')
  async login(@Request() req) {
    return this.authService.buildToken(req.user);
  }

  @Post('token/refresh')
  refreshToken(@Body() value) {
    return this.authService.refreshToken(value.token);
  }
}

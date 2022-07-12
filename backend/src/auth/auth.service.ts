import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../security/users.service';
import { EncryptService } from '../security/encrypt.service';
import { User } from '../security/models/user';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private encryptService: EncryptService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = {password: ''}//await this.usersService.findOneEntity(username);
    if (
      user &&
      (await this.encryptService.comparePassword(pass, user.password))
    ) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async buildToken(user: any) {
    return this.createToken(user);
  }

  private createToken(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, {
        expiresIn: parseInt(process.env.JWT_REFRESH_EXPIRY_IN_SEC, 10) || 3600,
      }),
      email: user.email,
      user: null //JSON.stringify(User.getUserFromEntity(user))
    };
  }

  async refreshToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      return null //this.createToken(await this.usersService.findOneEntity(payload.username));
    } catch (e) {
      // TokenExpiredError
      // jwtwebtokenerror
      console.dir(e);
    }
  }
}

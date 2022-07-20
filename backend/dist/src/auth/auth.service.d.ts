import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../security/users.service';
import { EncryptService } from '../security/encrypt.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private encryptService;
    constructor(usersService: UsersService, jwtService: JwtService, encryptService: EncryptService);
    validateUser(username: string, pass: string): Promise<any>;
    buildToken(user: any): Promise<{
        access_token: string;
        refresh_token: string;
        email: any;
        user: any;
    }>;
    private createToken;
    refreshToken(token: string): Promise<any>;
}

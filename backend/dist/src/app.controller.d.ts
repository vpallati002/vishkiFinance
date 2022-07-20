import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        refresh_token: string;
        email: any;
        user: any;
    }>;
    refreshToken(value: any): Promise<any>;
}

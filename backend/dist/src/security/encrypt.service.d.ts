export declare class EncryptService {
    hashPassword(password: any, saltRounds?: number): Promise<any>;
    comparePassword(password: any, hash: any): Promise<any>;
    encodeToken(tokenInput: any): Promise<string>;
    decodeToken(encodedToken: any): Promise<string>;
}

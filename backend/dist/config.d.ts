import { JwtModuleOptions } from "@nestjs/jwt";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export declare const config: () => {
    database: TypeOrmModuleOptions;
    jwt: {
        secret: string;
        signOptions: JwtModuleOptions;
    };
};

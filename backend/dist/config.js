"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = () => ({
    database: {
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        port: 5432,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: false,
        entities: [__dirname + '/**/*.entity.{ts,js}'],
        migrations: ['src/migration/*{.ts,.js}'],
        cli: {
            migrationsDir: 'src/migration',
        },
        logging: ['query'],
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        signOptions: {
            expiresIn: parseInt(process.env.JWT_EXPIRY_IN_SEC, 10) || 600,
        }
    }
});
exports.config = config;
//# sourceMappingURL=config.js.map
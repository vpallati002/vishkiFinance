import { Injectable } from "@nestjs/common";
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  constructor(private configService: ConfigService) {
  }
  createJwtOptions(): JwtModuleOptions {
    return this.configService.get('jwt');
  }
}

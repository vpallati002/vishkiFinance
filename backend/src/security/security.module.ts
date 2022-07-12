import { Module } from '@nestjs/common';
import { UsersController, UsersController2 } from './users.controller';
import { UsersService } from './users.service';
import { EncryptService } from './encrypt.service';
import { SharedModule } from '../shared/shared.module';
import { EntityModule } from '../entity/entity.module';

@Module({
  imports: [SharedModule, EntityModule],
  providers: [UsersService, EncryptService],
  controllers: [UsersController, UsersController2],
  exports: [UsersService, EncryptService],
})
export class SecurityModule {}

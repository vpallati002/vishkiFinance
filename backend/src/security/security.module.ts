import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { EncryptService } from './encrypt.service';
import { SharedModule } from '../shared/shared.module';
import { EntityModule } from '../entity/entity.module';

@Module({
  imports: [SharedModule, EntityModule],
  providers: [UsersService, EncryptService],
  controllers: [UsersController],
  exports: [UsersService, EncryptService],
})
export class SecurityModule {}

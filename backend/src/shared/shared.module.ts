import { Module } from '@nestjs/common';
import { EntityModule } from '../entity/entity.module';
import { LookupController } from './lookup/lookup.controller';
import { LookupService } from './lookup/lookup.service';

@Module({
  imports: [EntityModule],
  providers: [LookupService],
  controllers: [LookupController],
  exports: [LookupService],
})
export class SharedModule {}

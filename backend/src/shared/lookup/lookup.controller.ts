import { Controller, Get } from '@nestjs/common';
import { LookupService } from './lookup.service';

@Controller('lookup')
export class LookupController {
  constructor(private lookupService: LookupService) {}

  @Get()
  async get() {
    const lookups = await this.lookupService.getAllLookups();
    return lookups;
  }
}

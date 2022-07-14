import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LookupService } from '../shared/lookup/lookup.service';
import { Transaction } from './models/transaction';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService,
    private lookupService: LookupService) {}

  @Get('get')
  async checkDuplicateEmail() {
    //const response = await this.userService.checkDuplicateEmail(email);
    var response = await this.userService.getTransactions();
    return response;
  }

  @Post('addTransaction')
  async addUser(@Body() a: Transaction) {
    var response = this.userService.addTransaction(a);
    return response;
  }

  @Post('addLookup')
  async addLookup(@Body() a: { lookup: string, lookupName: string }) {
    var response = this.lookupService.addLookup(a);
    return response;
  }

}

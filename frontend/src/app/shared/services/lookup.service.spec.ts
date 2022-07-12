/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpTokenService } from './http-token.service';
import { LookupService } from './lookup.service';

describe('Service: Lookup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LookupService, {provide: HttpTokenService, useValue: jasmine.createSpyObj('HttpTokenService',['get','post','put','delete'])}],
    });
  });

  it('should ...', inject([LookupService], (service: LookupService) => {
    expect(service).toBeTruthy();
  }));
});

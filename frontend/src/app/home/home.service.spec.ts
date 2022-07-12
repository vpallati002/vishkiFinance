/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpTokenService } from '../shared/services/http-token.service';
import { HomeService } from './home.service';

describe('Service: Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService,
        {provide: HttpTokenService, useValue: jasmine.createSpyObj('HttpTokenService',['get','post','put','delete'])}
      ],
    });
  });

  it('should Create', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));
});

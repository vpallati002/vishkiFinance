import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { HttpTokenService } from './http-token.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService,
        {provide: HttpTokenService, useValue: jasmine.createSpyObj('HttpTokenService',['get','post','put','delete'])},
        { provide: Router, useValue: jasmine.createSpyObj('Router',['navigate']) },
      ],
    });

    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationGuard } from './authentication.guard';
export class AuthenticationServiceMock{
  public get getToken(): string {
    return "sessionStorage.getItem('id_token') as string";
  }

  public get getRefreshToken(): string {
    return "sessionStorage.getItem('refresh_token') as string;"
  }

  public hasRefreshTokenExpired(): boolean {
    return false
  }

  public hasIdTokenExpired(): boolean {
    return false
  }
}
class SetUp {
  static getSpy(key: string) {
    switch (key) {
      case 'AuthenticationService':
        return jasmine.createSpyObj(key, [
          'populateLookupData',
          'getDisciplineTypes',
          'getActionButtons',
        ]);

      case 'SelectionProcessService':
        return jasmine.createSpyObj(key, [
          'getDerSelectionProcess',
          'returnDerApplication',
          'saveDerAssignEvaluationPanel',
          'getEvaluationPanelData',
          'saveDerEPResult',
        ]);

      default:
        break;
    }
  }
}
describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },
        { provide: Router, useValue: jasmine.createSpyObj('Router',['navigate']) },
      ],
    });
    guard = TestBed.inject(AuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpTokenService } from './http-token.service';

describe('Service: HttpToken', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpTokenService, {provider: HttpClient, useValue: jasmine.createSpyObj('HttpClient',['get','post','put','delete'])}],
      imports: [ BrowserModule,HttpClientModule]
    });
  });

  it('should ...', inject([HttpTokenService], (service: HttpTokenService) => {
    expect(service).toBeTruthy();
  }));
});

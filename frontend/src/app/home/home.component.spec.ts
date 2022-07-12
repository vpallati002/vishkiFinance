/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { UtilityService } from '../shared/services/utility.service';
import { MockComponent } from 'ng-mocks';
import { HeaderComponent } from '../shared/header/header.component';

class Page {
  constructor(private fixture: ComponentFixture<HomeComponent>) {}

  get component(): HomeComponent {
    return this.fixture.componentInstance;
  }

  public queryAll(cssElement: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(cssElement));
  }

  public query(cssElement: string): DebugElement {
    return this.fixture.debugElement.query(By.css(cssElement));
  }
}

class SetUp {
  static getSpy(key: string) {
    switch (key) {
      case 'AuthenticationService':
        return jasmine.createSpyObj(key, [
          'login'
        ]);

      case 'LookupService':
        return jasmine.createSpyObj(key, [
          'populateLookupData'
        ]);
      case 'MessageService':
        return jasmine.createSpyObj(key, [
          'add'
        ]);
      case 'Router':
        return jasmine.createSpyObj(key, ['navigateByUrl']);

      default:
        break;
    }
  }

  static getMockData() {}
}

describe('HomeComponent', () => {
  let page: Page;
  let fixture: ComponentFixture<HomeComponent>;
  const spies: any[] = [];

  function createSpy() {
    spies.push(SetUp.getSpy('SignUpService'));
    spies.push(SetUp.getSpy('LookupService'));
    spies.push(SetUp.getSpy('MessageService'));
    spies.push(SetUp.getSpy('Router'));
  }

createSpy();

async function createComponent() {
  fixture = TestBed.createComponent(HomeComponent);
  page = new Page(fixture);
  fixture.detectChanges();
  await fixture.whenStable();
}


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, MockComponent(HeaderComponent)],
      providers: [
        { provide: AuthenticationService, useValue: spies[0] },
        UtilityService,
        { provide: MessageService, useValue: spies[2] },
        { provide: Router, useValue:spies[3] },
      ],
    }).compileComponents();
    createComponent();
  }));

  it('should create', () => {
    expect(page.component).toBeTruthy();
  });
});


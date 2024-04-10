import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';
import { mockDataHeaderComponent } from './header.component.mock';

describe('HeaderComponent', () => {
  let mockData: (typeof mockDataHeaderComponent) = mockDataHeaderComponent;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let db: DebugElement;
  let apiMock: {
    router: { navigateByUrl: jasmine.Spy },
  };

  beforeEach(waitForAsync(() => {
    apiMock = {
      router: {
        navigateByUrl: jasmine.createSpy(),
      }
    }
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      providers: [
        { provide: Router, useValue: apiMock.router }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    db = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing with full config object - ', () => {
    beforeEach(() => {
      component.config = mockData.fullConfig;
      fixture.detectChanges();
    });

    it('should render the logo', () => {
      expect(db.query(By.css('.c-header--logo__text'))).toBeDefined();
    });

    it('should render 2 nav items', () => {
      expect(db.queryAll(By.css('.c-nav--item')).length).toEqual(2);
    });
  });

  describe('Testing onLogoClick - ', () => {
    it('should do nothing if config.logo not setted', () => {
      component.config = undefined;
      component.onLogoClick();
      expect(apiMock.router.navigateByUrl).not.toHaveBeenCalled();
    });

    it('should redirect to path received in the config object', () => {
      component.config = mockData.fullConfig;
      component.onLogoClick();
      expect(apiMock.router.navigateByUrl).toHaveBeenCalledWith('/dashboard');
    });
  });
});

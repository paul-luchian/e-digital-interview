import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { mockDataAppComponent } from './app.component.mock';

describe('AppComponent', () => {
  let mockData: (typeof mockDataAppComponent) = mockDataAppComponent;
  let db: DebugElement;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let renderer2: Renderer2;
  let spies: {
    rendererAddClass: jasmine.Spy;
    getHeaderConfig: jasmine.Spy;
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        Renderer2,
        Document,
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    db = fixture.debugElement;
    renderer2 = fixture.componentRef.injector.get(Renderer2);

    spies = {
      rendererAddClass: spyOn(renderer2, 'addClass').and.callThrough(),
      getHeaderConfig: spyOn((component as any), 'getHeaderConfig').and.callThrough(),
    }
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call getHeaderConfig logic', () => {
    expect(spies.getHeaderConfig).toHaveBeenCalled();
  });

  it('should have header config setted', () => {
    expect(component.headerConfig).toBeDefined();
  });

  it('should call renderer.addClass to set the device type', () => {
    expect(spies.rendererAddClass).toHaveBeenCalledWith(jasmine.any(HTMLElement), 'is-pointer-device');
  });

  describe('Testing detectDeviceType - ', () => {
    it(`should return 'is-touch-device' on touch device`, () => {
      expect((component as any).detectDeviceType({ ontouchstart: jasmine.any(Function) })).toEqual('is-touch-device')
    });

    it(`should return 'is-pointer-device' on pointer device`, () => {
      expect((component as any).detectDeviceType({})).toEqual('is-pointer-device')
    });
  });

  describe('Testing getHeaderConfig - ', () => {
    it('should return the configuration for the header component', () => {
      expect((component as any).getHeaderConfig()).toEqual(mockData.headerConfig)
    });
  });
});

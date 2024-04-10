import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPhotosComponent } from './dashboard-photos.component';

describe('DashboardPhotosComponent', () => {
  let component: DashboardPhotosComponent;
  let fixture: ComponentFixture<DashboardPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

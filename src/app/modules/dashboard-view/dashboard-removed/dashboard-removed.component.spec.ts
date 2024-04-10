import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardRemovedComponent } from './dashboard-removed.component';

describe('DashboardRemovedComponent', () => {
  let component: DashboardRemovedComponent;
  let fixture: ComponentFixture<DashboardRemovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRemovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRemovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

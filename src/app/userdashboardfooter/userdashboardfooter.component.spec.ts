import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardfooterComponent } from './userdashboardfooter.component';

describe('UserdashboardfooterComponent', () => {
  let component: UserdashboardfooterComponent;
  let fixture: ComponentFixture<UserdashboardfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdashboardfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdashboardfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

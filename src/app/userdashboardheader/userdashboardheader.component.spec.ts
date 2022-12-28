import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardheaderComponent } from './userdashboardheader.component';

describe('UserdashboardheaderComponent', () => {
  let component: UserdashboardheaderComponent;
  let fixture: ComponentFixture<UserdashboardheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdashboardheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdashboardheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRegisComponent } from './success-regis.component';

describe('SuccessRegisComponent', () => {
  let component: SuccessRegisComponent;
  let fixture: ComponentFixture<SuccessRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessRegisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

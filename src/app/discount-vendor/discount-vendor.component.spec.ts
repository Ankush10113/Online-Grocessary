import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountVendorComponent } from './discount-vendor.component';

describe('DiscountVendorComponent', () => {
  let component: DiscountVendorComponent;
  let fixture: ComponentFixture<DiscountVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

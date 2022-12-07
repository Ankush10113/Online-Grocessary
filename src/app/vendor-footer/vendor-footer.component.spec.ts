import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFooterComponent } from './vendor-footer.component';

describe('VendorFooterComponent', () => {
  let component: VendorFooterComponent;
  let fixture: ComponentFixture<VendorFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

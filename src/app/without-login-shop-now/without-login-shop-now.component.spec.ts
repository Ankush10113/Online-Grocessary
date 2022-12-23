import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutLoginShopNowComponent } from './without-login-shop-now.component';

describe('WithoutLoginShopNowComponent', () => {
  let component: WithoutLoginShopNowComponent;
  let fixture: ComponentFixture<WithoutLoginShopNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutLoginShopNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutLoginShopNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

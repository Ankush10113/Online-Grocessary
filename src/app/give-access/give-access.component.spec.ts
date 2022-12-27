import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveAccessComponent } from './give-access.component';

describe('GiveAccessComponent', () => {
  let component: GiveAccessComponent;
  let fixture: ComponentFixture<GiveAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

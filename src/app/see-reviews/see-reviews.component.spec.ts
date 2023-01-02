import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeReviewsComponent } from './see-reviews.component';

describe('SeeReviewsComponent', () => {
  let component: SeeReviewsComponent;
  let fixture: ComponentFixture<SeeReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

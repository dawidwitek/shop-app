import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartSummaryComponent } from './user-cart-summary.component';

describe('UserCartSummaryComponent', () => {
  let component: UserCartSummaryComponent;
  let fixture: ComponentFixture<UserCartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCartSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

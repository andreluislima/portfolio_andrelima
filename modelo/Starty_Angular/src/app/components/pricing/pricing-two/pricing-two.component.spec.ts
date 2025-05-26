import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTwoComponent } from './pricing-two.component';

describe('PricingTwoComponent', () => {
  let component: PricingTwoComponent;
  let fixture: ComponentFixture<PricingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

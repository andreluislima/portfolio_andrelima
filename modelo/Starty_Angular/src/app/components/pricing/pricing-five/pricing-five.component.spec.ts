import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingFiveComponent } from './pricing-five.component';

describe('PricingFiveComponent', () => {
  let component: PricingFiveComponent;
  let fixture: ComponentFixture<PricingFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

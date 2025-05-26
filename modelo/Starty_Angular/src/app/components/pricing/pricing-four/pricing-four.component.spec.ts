import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingFourComponent } from './pricing-four.component';

describe('PricingFourComponent', () => {
  let component: PricingFourComponent;
  let fixture: ComponentFixture<PricingFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

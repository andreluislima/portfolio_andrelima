import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOneComponent } from './pricing-one.component';

describe('PricingOneComponent', () => {
  let component: PricingOneComponent;
  let fixture: ComponentFixture<PricingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

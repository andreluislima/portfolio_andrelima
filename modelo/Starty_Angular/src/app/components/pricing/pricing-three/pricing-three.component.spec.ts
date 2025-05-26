import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingThreeComponent } from './pricing-three.component';

describe('PricingThreeComponent', () => {
  let component: PricingThreeComponent;
  let fixture: ComponentFixture<PricingThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

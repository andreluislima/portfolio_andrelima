import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePricingComponent } from './page-pricing.component';

describe('PagePricingComponent', () => {
  let component: PagePricingComponent;
  let fixture: ComponentFixture<PagePricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

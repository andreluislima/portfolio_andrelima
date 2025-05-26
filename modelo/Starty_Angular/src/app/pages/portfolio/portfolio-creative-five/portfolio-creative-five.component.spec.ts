import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCreativeFiveComponent } from './portfolio-creative-five.component';

describe('PortfolioCreativeFiveComponent', () => {
  let component: PortfolioCreativeFiveComponent;
  let fixture: ComponentFixture<PortfolioCreativeFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCreativeFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCreativeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

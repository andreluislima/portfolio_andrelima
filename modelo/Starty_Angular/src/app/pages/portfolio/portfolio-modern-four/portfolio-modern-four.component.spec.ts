import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModernFourComponent } from './portfolio-modern-four.component';

describe('PortfolioModernFourComponent', () => {
  let component: PortfolioModernFourComponent;
  let fixture: ComponentFixture<PortfolioModernFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioModernFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioModernFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

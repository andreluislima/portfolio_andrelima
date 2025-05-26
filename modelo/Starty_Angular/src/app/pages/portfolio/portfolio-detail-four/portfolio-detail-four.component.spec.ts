import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailFourComponent } from './portfolio-detail-four.component';

describe('PortfolioDetailFourComponent', () => {
  let component: PortfolioDetailFourComponent;
  let fixture: ComponentFixture<PortfolioDetailFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDetailFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDetailFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

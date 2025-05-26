import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioClassicFourComponent } from './portfolio-classic-four.component';

describe('PortfolioClassicFourComponent', () => {
  let component: PortfolioClassicFourComponent;
  let fixture: ComponentFixture<PortfolioClassicFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioClassicFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioClassicFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioClassicFiveComponent } from './portfolio-classic-five.component';

describe('PortfolioClassicFiveComponent', () => {
  let component: PortfolioClassicFiveComponent;
  let fixture: ComponentFixture<PortfolioClassicFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioClassicFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioClassicFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

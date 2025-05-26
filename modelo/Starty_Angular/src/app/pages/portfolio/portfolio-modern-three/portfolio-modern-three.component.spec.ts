import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModernThreeComponent } from './portfolio-modern-three.component';

describe('PortfolioModernThreeComponent', () => {
  let component: PortfolioModernThreeComponent;
  let fixture: ComponentFixture<PortfolioModernThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioModernThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioModernThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

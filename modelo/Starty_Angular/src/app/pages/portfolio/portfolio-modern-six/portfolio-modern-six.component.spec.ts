import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModernSixComponent } from './portfolio-modern-six.component';

describe('PortfolioModernSixComponent', () => {
  let component: PortfolioModernSixComponent;
  let fixture: ComponentFixture<PortfolioModernSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioModernSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioModernSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

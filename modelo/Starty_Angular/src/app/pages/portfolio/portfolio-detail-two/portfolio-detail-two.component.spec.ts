import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailTwoComponent } from './portfolio-detail-two.component';

describe('PortfolioDetailTwoComponent', () => {
  let component: PortfolioDetailTwoComponent;
  let fixture: ComponentFixture<PortfolioDetailTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDetailTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDetailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

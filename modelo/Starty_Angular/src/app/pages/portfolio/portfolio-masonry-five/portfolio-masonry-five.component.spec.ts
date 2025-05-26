import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryFiveComponent } from './portfolio-masonry-five.component';

describe('PortfolioMasonryFiveComponent', () => {
  let component: PortfolioMasonryFiveComponent;
  let fixture: ComponentFixture<PortfolioMasonryFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMasonryFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioMasonryFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

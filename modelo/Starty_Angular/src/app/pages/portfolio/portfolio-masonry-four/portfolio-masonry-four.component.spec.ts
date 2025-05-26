import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryFourComponent } from './portfolio-masonry-four.component';

describe('PortfolioMasonryFourComponent', () => {
  let component: PortfolioMasonryFourComponent;
  let fixture: ComponentFixture<PortfolioMasonryFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMasonryFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioMasonryFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

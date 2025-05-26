import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonaryPortfolioComponent } from './masonary-portfolio.component';

describe('MasonaryPortfolioComponent', () => {
  let component: MasonaryPortfolioComponent;
  let fixture: ComponentFixture<MasonaryPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasonaryPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonaryPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

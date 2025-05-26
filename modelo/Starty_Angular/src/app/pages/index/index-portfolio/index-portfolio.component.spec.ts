import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPortfolioComponent } from './index-portfolio.component';

describe('IndexPortfolioComponent', () => {
  let component: IndexPortfolioComponent;
  let fixture: ComponentFixture<IndexPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

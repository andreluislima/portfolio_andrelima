import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativePortfolioComponent } from './creative-portfolio.component';

describe('CreativePortfolioComponent', () => {
  let component: CreativePortfolioComponent;
  let fixture: ComponentFixture<CreativePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativePortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

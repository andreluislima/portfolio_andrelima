import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernPortfolioComponent } from './modern-portfolio.component';

describe('ModernPortfolioComponent', () => {
  let component: ModernPortfolioComponent;
  let fixture: ComponentFixture<ModernPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

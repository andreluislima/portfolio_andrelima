import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicPortfolioComponent } from './classic-portfolio.component';

describe('ClassicPortfolioComponent', () => {
  let component: ClassicPortfolioComponent;
  let fixture: ComponentFixture<ClassicPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

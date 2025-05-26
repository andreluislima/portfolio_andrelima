import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCreativeThreeComponent } from './portfolio-creative-three.component';

describe('PortfolioCreativeThreeComponent', () => {
  let component: PortfolioCreativeThreeComponent;
  let fixture: ComponentFixture<PortfolioCreativeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCreativeThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCreativeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

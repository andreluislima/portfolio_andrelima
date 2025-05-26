import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCreativeSidebarComponent } from './portfolio-creative-sidebar.component';

describe('PortfolioCreativeSidebarComponent', () => {
  let component: PortfolioCreativeSidebarComponent;
  let fixture: ComponentFixture<PortfolioCreativeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCreativeSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCreativeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

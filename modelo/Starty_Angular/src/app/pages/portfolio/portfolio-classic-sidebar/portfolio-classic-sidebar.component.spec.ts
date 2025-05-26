import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioClassicSidebarComponent } from './portfolio-classic-sidebar.component';

describe('PortfolioClassicSidebarComponent', () => {
  let component: PortfolioClassicSidebarComponent;
  let fixture: ComponentFixture<PortfolioClassicSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioClassicSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioClassicSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

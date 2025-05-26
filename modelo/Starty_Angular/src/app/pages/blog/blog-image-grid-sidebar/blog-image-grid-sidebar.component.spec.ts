import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImageGridSidebarComponent } from './blog-image-grid-sidebar.component';

describe('BlogImageGridSidebarComponent', () => {
  let component: BlogImageGridSidebarComponent;
  let fixture: ComponentFixture<BlogImageGridSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImageGridSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogImageGridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

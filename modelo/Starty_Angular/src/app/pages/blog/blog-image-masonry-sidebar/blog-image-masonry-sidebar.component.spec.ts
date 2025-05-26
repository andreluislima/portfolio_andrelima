import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImageMasonrySidebarComponent } from './blog-image-masonry-sidebar.component';

describe('BlogImageMasonrySidebarComponent', () => {
  let component: BlogImageMasonrySidebarComponent;
  let fixture: ComponentFixture<BlogImageMasonrySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImageMasonrySidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogImageMasonrySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

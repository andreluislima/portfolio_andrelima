import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMasonrySidebarComponent } from './blog-masonry-sidebar.component';

describe('BlogMasonrySidebarComponent', () => {
  let component: BlogMasonrySidebarComponent;
  let fixture: ComponentFixture<BlogMasonrySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogMasonrySidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogMasonrySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

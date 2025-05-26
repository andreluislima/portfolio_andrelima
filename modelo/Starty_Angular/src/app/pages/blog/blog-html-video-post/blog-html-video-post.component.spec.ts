import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHtmlVideoPostComponent } from './blog-html-video-post.component';

describe('BlogHtmlVideoPostComponent', () => {
  let component: BlogHtmlVideoPostComponent;
  let fixture: ComponentFixture<BlogHtmlVideoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHtmlVideoPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHtmlVideoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogYoutubePostComponent } from './blog-youtube-post.component';

describe('BlogYoutubePostComponent', () => {
  let component: BlogYoutubePostComponent;
  let fixture: ComponentFixture<BlogYoutubePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogYoutubePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogYoutubePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHtmlAudioPostComponent } from './blog-html-audio-post.component';

describe('BlogHtmlAudioPostComponent', () => {
  let component: BlogHtmlAudioPostComponent;
  let fixture: ComponentFixture<BlogHtmlAudioPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHtmlAudioPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHtmlAudioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

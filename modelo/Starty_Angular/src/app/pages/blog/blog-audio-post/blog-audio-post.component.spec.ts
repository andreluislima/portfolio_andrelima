import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAudioPostComponent } from './blog-audio-post.component';

describe('BlogAudioPostComponent', () => {
  let component: BlogAudioPostComponent;
  let fixture: ComponentFixture<BlogAudioPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAudioPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAudioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

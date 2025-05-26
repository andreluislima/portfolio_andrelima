import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVimeoPostComponent } from './blog-vimeo-post.component';

describe('BlogVimeoPostComponent', () => {
  let component: BlogVimeoPostComponent;
  let fixture: ComponentFixture<BlogVimeoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogVimeoPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogVimeoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

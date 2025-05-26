import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBlockquotePostComponent } from './blog-blockquote-post.component';

describe('BlogBlockquotePostComponent', () => {
  let component: BlogBlockquotePostComponent;
  let fixture: ComponentFixture<BlogBlockquotePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogBlockquotePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBlockquotePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

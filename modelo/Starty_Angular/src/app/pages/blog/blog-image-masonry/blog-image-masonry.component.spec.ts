import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImageMasonryComponent } from './blog-image-masonry.component';

describe('BlogImageMasonryComponent', () => {
  let component: BlogImageMasonryComponent;
  let fixture: ComponentFixture<BlogImageMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImageMasonryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogImageMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

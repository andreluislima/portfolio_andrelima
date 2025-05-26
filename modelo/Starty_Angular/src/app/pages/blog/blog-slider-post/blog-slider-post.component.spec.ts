import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSliderPostComponent } from './blog-slider-post.component';

describe('BlogSliderPostComponent', () => {
  let component: BlogSliderPostComponent;
  let fixture: ComponentFixture<BlogSliderPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSliderPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSliderPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

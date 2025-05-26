import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStandardPostComponent } from './blog-standard-post.component';

describe('BlogStandardPostComponent', () => {
  let component: BlogStandardPostComponent;
  let fixture: ComponentFixture<BlogStandardPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogStandardPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogStandardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

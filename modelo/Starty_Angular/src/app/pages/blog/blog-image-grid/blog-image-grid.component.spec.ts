import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImageGridComponent } from './blog-image-grid.component';

describe('BlogImageGridComponent', () => {
  let component: BlogImageGridComponent;
  let fixture: ComponentFixture<BlogImageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImageGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogImageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPersonalBlogComponent } from './index-personal-blog.component';

describe('IndexPersonalBlogComponent', () => {
  let component: IndexPersonalBlogComponent;
  let fixture: ComponentFixture<IndexPersonalBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexPersonalBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPersonalBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

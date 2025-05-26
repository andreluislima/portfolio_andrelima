import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailTwoComponent } from './blog-detail-two.component';

describe('BlogDetailTwoComponent', () => {
  let component: BlogDetailTwoComponent;
  let fixture: ComponentFixture<BlogDetailTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

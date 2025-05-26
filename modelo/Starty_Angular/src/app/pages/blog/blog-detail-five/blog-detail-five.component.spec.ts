import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailFiveComponent } from './blog-detail-five.component';

describe('BlogDetailFiveComponent', () => {
  let component: BlogDetailFiveComponent;
  let fixture: ComponentFixture<BlogDetailFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

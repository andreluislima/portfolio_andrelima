import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailFourComponent } from './blog-detail-four.component';

describe('BlogDetailFourComponent', () => {
  let component: BlogDetailFourComponent;
  let fixture: ComponentFixture<BlogDetailFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

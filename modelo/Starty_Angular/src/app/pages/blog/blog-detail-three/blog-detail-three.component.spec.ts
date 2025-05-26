import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailThreeComponent } from './blog-detail-three.component';

describe('BlogDetailThreeComponent', () => {
  let component: BlogDetailThreeComponent;
  let fixture: ComponentFixture<BlogDetailThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailOneComponent } from './blog-detail-one.component';

describe('BlogDetailOneComponent', () => {
  let component: BlogDetailOneComponent;
  let fixture: ComponentFixture<BlogDetailOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

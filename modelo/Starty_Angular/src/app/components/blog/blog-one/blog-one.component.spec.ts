import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOneComponent } from './blog-one.component';

describe('BlogOneComponent', () => {
  let component: BlogOneComponent;
  let fixture: ComponentFixture<BlogOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

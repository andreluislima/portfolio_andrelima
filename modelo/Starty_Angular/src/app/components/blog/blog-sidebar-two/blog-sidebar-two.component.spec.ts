import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSidebarTwoComponent } from './blog-sidebar-two.component';

describe('BlogSidebarTwoComponent', () => {
  let component: BlogSidebarTwoComponent;
  let fixture: ComponentFixture<BlogSidebarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSidebarTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSidebarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

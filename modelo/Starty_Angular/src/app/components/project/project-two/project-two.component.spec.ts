import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTwoComponent } from './project-two.component';

describe('ProjectTwoComponent', () => {
  let component: ProjectTwoComponent;
  let fixture: ComponentFixture<ProjectTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

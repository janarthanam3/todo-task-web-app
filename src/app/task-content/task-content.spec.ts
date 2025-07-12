import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskContent } from './task-content';

describe('TaskContent', () => {
  let component: TaskContent;
  let fixture: ComponentFixture<TaskContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

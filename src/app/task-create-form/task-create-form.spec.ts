import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCreateForm } from './task-create-form';

describe('TaskCreateForm', () => {
  let component: TaskCreateForm;
  let fixture: ComponentFixture<TaskCreateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCreateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCreateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

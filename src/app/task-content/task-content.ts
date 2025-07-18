import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-content',
  imports: [],
  templateUrl: './task-content.html',
  styleUrl: './task-content.css',
})
export class TaskContent {
  @Input() task!: { title: string; date: string; desc: string };
  ngOnChanges() {
    console.log(this.task);
  }
}

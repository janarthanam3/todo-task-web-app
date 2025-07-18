import { Component, Input } from '@angular/core';
interface IMember {
  name: string;
  position: string;
  img: string;
  tasks: {
    title: string;
    date: string;
    desc: string;
  }[];
}
@Component({
  selector: 'app-task-content',
  imports: [],
  templateUrl: './task-content.html',
  styleUrl: './task-content.css',
})
export class TaskContent {
  @Input({required: true}) selectedMember: IMember | null = null;
}

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
  selector: 'app-task-header',
  imports: [],
  templateUrl: './task-header.html',
  styleUrl: './task-header.css'
})
export class TaskHeader {
@Input({required: true}) selectedMember: IMember | null = null;
}

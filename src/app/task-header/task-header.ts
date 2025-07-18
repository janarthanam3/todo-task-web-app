import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMember } from '../config';
@Component({
  selector: 'app-task-header',
  imports: [],
  templateUrl: './task-header.html',
  styleUrl: './task-header.css'
})
export class TaskHeader {
@Input({required: true}) selectedMember: IMember | null = null;
@Output() addTaskClick = new EventEmitter<boolean>();
}

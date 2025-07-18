import { Component, Input } from '@angular/core';
import { IMember } from '../config';
@Component({
  selector: 'app-task-content',
  imports: [],
  templateUrl: './task-content.html',
  styleUrl: './task-content.css',
})
export class TaskContent {
  @Input({required: true}) selectedMember: IMember | null = null;
}

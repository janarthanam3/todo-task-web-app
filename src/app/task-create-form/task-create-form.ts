import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface IFromData {
  status: boolean;
  data: { title: string; desc: string; date: string };
}
@Component({
  selector: 'app-task-create-form',
  imports: [FormsModule],
  templateUrl: './task-create-form.html',
  styleUrl: './task-create-form.css',
})
export class TaskCreateForm {
  @Output() formAction = new EventEmitter<IFromData>();
  @Input() memberName: string | undefined;
  title: string = '';
  desc: string = '';
  date: string = new Date().toISOString().split('T')[0];
}

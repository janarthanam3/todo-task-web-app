import { Component, inject, signal } from '@angular/core';
import { Header } from './header/header';
import { MemberCard } from './member-card/member-card';
import { TaskHeader } from './task-header/task-header';
import { TaskContent } from './task-content/task-content';
import { TaskCreateForm } from './task-create-form/task-create-form';
import { IMember, IFromData } from './config';
import { DataService } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, MemberCard, TaskHeader, TaskContent, TaskCreateForm],
  styleUrl: './app.css',
})
export class App {
  members: IMember[] = [];
  selectedMember: IMember | null = null;
  isFormOpen: boolean = false;
  private dataService = inject(DataService);
  constructor() {
   this.members = this.dataService.initiateMembers();   
  }
  memberClick(event: IMember) {
    this.selectedMember = event;
  }
  addTaskClick(state: boolean) {
    this.isFormOpen = state;
  }
  taskActions(event: IFromData) {
    if (event.status) {
      this.isFormOpen = false;
      this.selectedMember?.tasks.push(event.data);
      localStorage.setItem('members', JSON.stringify(this.members));
    } else {
      this.isFormOpen = false;
    }
  }
}

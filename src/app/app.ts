import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { MemberCard } from './member-card/member-card';
import { TaskHeader } from "./task-header/task-header";
import { TaskContent } from "./task-content/task-content";
import { TaskCreateForm } from "./task-create-form/task-create-form";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, MemberCard, TaskHeader, TaskContent, TaskCreateForm],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-task-web-app');
}

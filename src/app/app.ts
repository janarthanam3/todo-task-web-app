import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { MemberCard } from './member-card/member-card';
import { TaskHeader } from "./task-header/task-header";
import { TaskContent } from "./task-content/task-content";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, MemberCard, TaskHeader, TaskContent],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-task-web-app');
}

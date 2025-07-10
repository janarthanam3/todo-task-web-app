import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[Header],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-task-web-app');
}

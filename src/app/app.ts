import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { MemberCard } from './member-card/member-card';
import { TaskHeader } from './task-header/task-header';
import { TaskContent } from './task-content/task-content';
import { TaskCreateForm } from './task-create-form/task-create-form';
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
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, MemberCard, TaskHeader, TaskContent, TaskCreateForm],
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todo-task-web-app');
  members: IMember[] = [
    {
      name: 'john',
      position: 'web developer',
      img: '',
      tasks: [
        {
          title: 'dashboard delivery',
          date: '22/01/2025',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium similique quos dignissimos quas vero ab error, saepe, culpa reiciendis maiores unde quis perspiciatis est atque officiis. ',
        },
      ],
    },
    {
      name: 'surya',
      position: 'programer',
      img: '',
      tasks: [
        {
          title: 'software delivery',
          date: '12/05/2025',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium similique quos dignissimos quas vero ab error, saepe, culpa reiciendis maiores unde quis perspiciatis est atque officiis. ',
        },
      ],
    },
    {
      name: 'sabari',
      position: 'designer',
      img: '',
      tasks: [
        {
          title: 'design delivery',
          date: '28/03/2025',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium similique quos dignissimos quas vero ab error, saepe, culpa reiciendis maiores unde quis perspiciatis est atque officiis. ',
        },
      ],
    },
    {
      name: 'vikram',
      position: 'associate',
      img: '',
      tasks: [],
    },
    {
      name: 'vijay',
      position: 'HR',
      img: '',
      tasks: [
        {
          title: 'presentation',
          date: '01/05/2025',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium similique quos dignissimos quas vero ab error, saepe, culpa reiciendis maiores unde quis perspiciatis est atque officiis. ',
        },
      ],
    },
  ];
  selectedMember: IMember | null = null;
  memberClick(event: any) {
    this.selectedMember = event;
  }
}

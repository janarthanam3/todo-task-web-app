import { Injectable } from '@angular/core';
import { IMember } from './config';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  title = 'Todo Task App';
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
          title: 'team presentation',
          date: '01/05/2025',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium similique quos dignissimos quas vero ab error, saepe, culpa reiciendis maiores unde quis perspiciatis est atque officiis. ',
        },
      ],
    },
    {
      name: 'ajith',
      position: 'TL',
      img: '',
      tasks: [
        {
          title: 'project presentation',
          date: '01/05/2025',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium similique quos dignissimos quas vero ab error, saepe, culpa reiciendis maiores unde quis perspiciatis est atque officiis. ',
        },
      ],
    },
  ];
  get getMembers() {
    return JSON.parse(localStorage.getItem('members') || '[]') as IMember[];
  }
  set setMembers(value: IMember[]) {
    localStorage.setItem('members', JSON.stringify(value));
  }
  initiateMembers(): IMember[] {
    const membersData = this.getMembers;
    if (membersData.length > 0) {
      return membersData;
    } else {
      const members = this.members;      
      this.setMembers = members;
      return members;
    }
  }
}

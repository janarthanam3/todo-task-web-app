import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  selector: 'app-member-card',
  imports: [],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css',
})
export class MemberCard {
  @Input() member!: IMember;
  @Output() memberClick = new EventEmitter<IMember>();
}

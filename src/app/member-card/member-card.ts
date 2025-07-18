import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMember } from '../config';

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

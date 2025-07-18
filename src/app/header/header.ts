import { Component } from '@angular/core';
import { DataService } from '../data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private dataService = new DataService();
  title: string;
  constructor() {
    this.title = this.dataService.title;
  }
}

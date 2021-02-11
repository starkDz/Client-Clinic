import { Component, OnInit } from '@angular/core';
import { summaryHeaderItem } from '../SharedComponents/data-summary-header/data-summary-header.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  items: summaryHeaderItem[] = [];
  constructor() {}
  ngOnInit(): void {
    this.items = [
      { title: 'info', data: '00', icon: '' },
      { title: 'info', data: '00', icon: '' },
      { title: 'info', data: '00', icon: '' },
      { title: 'info', data: '00', icon: '' },
      { title: 'info', data: '00', icon: '' },
    ];
  }
}

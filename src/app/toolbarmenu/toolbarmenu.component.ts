import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbarmenu',
  templateUrl: './toolbarmenu.component.html',
  styleUrls: ['./toolbarmenu.component.css']
})
export class ToolbarmenuComponent implements OnInit {

  links = [
    { path: '/landing', icon: 'home', label: 'landing'},
    { path: '/searchpage', icon: 'home', label: 'Search'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

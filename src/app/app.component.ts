import { Component } from '@angular/core';
import { ToolbarmenuComponent } from '../app/toolbarmenu/toolbarmenu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baby-name-app';
  links = [
    { path: '/landing', icon: 'home', label: 'landing'},
    { path: '/toolbar', icon: 'home', label: 'ToolBar'},
    { path: '/searchpage', icon: 'home', label: 'Search'},
  ];
}

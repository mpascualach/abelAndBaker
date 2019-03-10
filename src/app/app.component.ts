import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  tabs: Array<object> = [
    { text: 'Home', url: '/home' },
    { text: 'Our projects', url: '/projects' },
    { text: 'Other works', url: '/other-works' },
    { text: 'About us', url: '/about' },
  ]

  constructor(){

  }

  ngOnInit(){

  }
}

import { Component, OnInit } from '@angular/core';

interface Project {
  id: number,
  image: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectsComponent implements OnInit {


  projects: Array<object> = [
    { id: 1, image: '', title: 'Momochi', description: '' },
    { id: 2, image: '', title: 'Flymmics', description: '' },
    { id: 3, image: '', title: 'Whoops', description: '' },
    { id: 4, image: '', title: 'Dead-pet', description: '' },
  ];

  rows: Array<any> = [];

  constructor() { 
    for (let i = 0; i < this.projects.length; i++) {
      
    }
  }

  ngOnInit() {

  }

}

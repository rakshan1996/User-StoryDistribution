import { Component, OnInit } from '@angular/core';

export interface Tasks {
  description: string;
  updated: Date;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  Todos: Tasks[] = [
    {
      description: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      description: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      description: 'Work',
      updated: new Date('1/28/16'),
    }, {
      description: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      description: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      description: 'Work',
      updated: new Date('1/28/16'),
    }, {
      description: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      description: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      description: 'Work',
      updated: new Date('1/28/16'),
    }, {
      description: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      description: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      description: 'Work',
      updated: new Date('1/28/16'),
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

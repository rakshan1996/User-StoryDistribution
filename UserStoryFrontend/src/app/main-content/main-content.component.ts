import { Component, OnInit } from '@angular/core';

export interface trying {
  description: string;
  date: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  demos: trying[] = [
    {
      description : 'mzaaaajayega',
      date : '12/12/12 '
    },
    {
      description : 'mzaaaajayega',
      date : '12/12/12 '
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

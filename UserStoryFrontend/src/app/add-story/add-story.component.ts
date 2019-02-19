import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  Features: string[] = [
    'enhancement' , 'bug' , 'feature'
  ];
  Status: string[] = [
    'enque', 'inprogress', 'deployedOnDev', 'qaInProgress', 'waitingDeployment'
  ];
  Urgency: string[] =[
    'Low', 'Medium', 'High', 'Critical'
  ];
  constructor() { }

  ngOnInit() {
  }

}

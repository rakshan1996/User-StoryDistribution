import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StoriesService } from '../Services/stories.service';
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
  Urgency: string[] = [
    'Low', 'Medium', 'High', 'Critical'
  ];

  constructor(private storyService: StoriesService) {}

  storyForm = new FormGroup({
    description: new FormControl(''),
    criticality: new FormControl(''),
    feature: new FormControl(''),
    urgency: new FormControl(''),
    status: new FormControl('')
  });
  ngOnInit() {
  }

  createStory() {
    this.storyService.createStory(this.storyForm.value)
    .subscribe(response => {
      console.log(response);
    });
  }

}

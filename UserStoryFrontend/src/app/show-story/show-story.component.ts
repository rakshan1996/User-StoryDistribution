import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material';
import {Task} from '../tasks';
@Component({
  selector: 'app-show-story',
  templateUrl: './show-story.component.html',
  styleUrls: ['./show-story.component.css']
})
export class ShowStoryComponent implements OnInit {
  public story: Task;
  constructor(@Inject(MAT_DIALOG_DATA) public task: Task) { }

  ngOnInit() {
    this.story = this.task;
    console.log(this.story);
  }

}

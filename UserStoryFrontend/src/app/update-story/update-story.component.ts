import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../tasks';
import {MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-story',
  templateUrl: './update-story.component.html',
  styleUrls: ['./update-story.component.css']
})




export class UpdateStoryComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public task: Task) {}

  ngOnInit() {
    this.checkTask();
  }

  checkTask() {
    console.log(this.task);
  }

}

import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../Services/stories.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  Todos: Task[];
   inProgress: Task[] = [
  ];
  /*
  deployedOnDev: Tasks[] = [
  ];
  qaInProgress: Tasks[] = [
  ];
  waitingDeployment: Tasks[] = [
  ]; */

  constructor(private storyService: StoriesService) { }

  ngOnInit() {
    this.getTask();
  }
  getTask() {
    this.Todos = this.storyService.getTask();
  }

  test(task: Task): void {
    const index = this.Todos.indexOf(task);
    this.Todos.splice(index, 1);
    this.inProgress.push(task);

  }
}

import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../Services/stories.service';
import { Task } from '../tasks';
import { demoTasks } from '../mockTasks';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  demo: Task[];
  index = 0;
  Todos: Task[];
   inProgress: Task[] = [
   ];
  deployedOnDev: Task[] = [
   ];
  qaInProgress: Task[] = [
   ];
  waitingDeployment: Task[] = [
   ];

  constructor(private storyService: StoriesService) { }

  ngOnInit() {
    this.getTask();
  }
  divide( item): void {
    if (item.Type === 'Enque') {
     this.Todos.push(item);
     }
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

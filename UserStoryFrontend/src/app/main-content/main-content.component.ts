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
  Todos: Task[];
   inProgress: Task[];
  deployedOnDev: Task[];
  qaInProgress: Task[];
  waitingDeployment: Task[];

  constructor(private storyService: StoriesService) { }

  ngOnInit() {
    this.getTask();
  }

  
  divide(): void {
    this.demo.forEach(function (task) {
      console.log(task.Type);
      
       if (task.Type === 'WaitingDeployment') {
        this.waitingDeployment.push(task);
        console.log(this.waitingDeployment);
      } else if (task.Type === 'QaInProgress') {
        //console.log(this.qaInProgress);
        this.qaInProgress.push(task);
      }
    });
  }
  
  
  getTask() {
    this.demo = this.storyService.getTask();
    this.divide();
    
    /* this.inProgress = this.storyService.getTask();
    this.deployedOnDev = this.storyService.getTask();
    this.qaInProgress = this.storyService.getTask(); */
    console.log(this.demo);
     /* this.demo.forEach(function (task) {
      console.log(task.Type);
      console.log($scope.qaInProgress);
       if (task.Type === 'WaitingDeployment') {
        this.waitingDeployment.push(task);
        console.log(this.waitingDeployment);
      } else if (task.Type === 'QaInProgress') {
        console.log(this.qaInProgress);
        this.qaInProgress.push(task);
      }
    }); */
  }

  

  test(task: Task): void {
    const index = this.Todos.indexOf(task);
    this.Todos.splice(index, 1);
    this.inProgress.push(task);

  }
}

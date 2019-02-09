import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../Services/stories.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Task } from '../tasks';
import { demoTasks } from '../mockTasks';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  demo: Task[] = [];
  Todos: Task[] = [];
   inProgress: Task[] = [];
  deployedOnDev: Task[] = [];
  qaInProgress: Task[] = [];
  waitingDeployment: Task[] = [];

  constructor(private storyService: StoriesService) { }

  ngOnInit() {
    this.getTask();
  }
  divide(): void {

    console.log(this.demo);
    this.demo.forEach((task) => {

       if (task.Type === 'WaitingDeployment') {
        this.waitingDeployment.push(task);
        console.log(this.waitingDeployment);
      } else if (task.Type === 'QaInProgress') {

        this.qaInProgress.push(task);
      } else if (task.Type === 'EnQue') {
        this.Todos.push(task);
      } else if (task.Type === 'DeployedOnDev') {
        this.deployedOnDev.push(task);
      } else {
        this.inProgress.push(task);
      }

    });
  }
  getTask() {
    this.demo = this.storyService.getTask();
    this.divide();
  }

 test123(event): boolean {
   debugger;
   console.log('it WOrks');
    console.log(event);
    return true;
  }

  test(task: Task): void {
    const index = this.Todos.indexOf(task);
    this.Todos.splice(index, 1);
    this.inProgress.push(task);
  }
}

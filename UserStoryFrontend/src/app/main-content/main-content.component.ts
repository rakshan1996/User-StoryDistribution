import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../Services/stories.service';
import {DragDropModule, CdkDrag, CdkDragDrop,moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Task } from '../tasks';


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
    debugger;
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
      } else if (task.Type === 'InProgress') {
        this.inProgress.push(task);
      }

    });
  }
  getTask() {
    console.log(this.storyService.getTask());
  }

 /* test123(event: CdkDragDrop<Task>, task: Task): void {
   console.log(event.container.exit);
   debugger;
   if (event.container.exit) {
    if (task.Type === 'EnQue') {
      const index = this.Todos.indexOf(task);
      this.Todos.splice(index, 1);
      task.Type = 'InProgress';
      this.inProgress.push(task);
     } else {
      const index = this.inProgress.indexOf(task);
      this.inProgress.splice(index, 1);
      task.Type = 'EnQue';
      this.Todos.push(task);
     }
   }
   
  }
 */
  test(task: Task): void {
    debugger;
    const index = this.Todos.indexOf(task);
    this.Todos.splice(index, 1);
    this.inProgress.push(task);
  }
}

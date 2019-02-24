import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../Services/stories.service';
import { Task } from '../tasks';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateStoryComponent } from '../update-story/update-story.component';
import {ShowStoryComponent } from '../show-story/show-story.component';



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

  constructor(private storyService: StoriesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getTask();
  }
  divide(): void {
    console.log(this.demo);
    this.demo.forEach((task) => {

       if (task.status === 'WaitingDeployment') {
        this.waitingDeployment.push(task);
        console.log(this.waitingDeployment);
      } else if (task.status === 'QaInProgress') {

        this.qaInProgress.push(task);
      } else if (task.status === 'enque') {
        this.Todos.push(task);
      } else if (task.status === 'DeployedOnDev') {
        this.deployedOnDev.push(task);
      } else if (task.status === 'inProgress') {
        this.inProgress.push(task);
      }

    });
  }
  getTask() {
    this.storyService.getTask()
    .subscribe( response => {
      this.demo = response.stories;
      this.divide();
    });
  }

  openDetail(task: Task) {
    this.dialog.open(ShowStoryComponent, { data: task});
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
    const index = this.Todos.indexOf(task);
    this.Todos.splice(index, 1);
    this.inProgress.push(task);
  }
}

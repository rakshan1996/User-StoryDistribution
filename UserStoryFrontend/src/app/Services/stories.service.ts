import { Injectable } from '@angular/core';
import {Task} from '../tasks';
import {demoTasks} from '../mockTasks';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor() { }

  getTask(): Task[] {
    return demoTasks;
  }
}

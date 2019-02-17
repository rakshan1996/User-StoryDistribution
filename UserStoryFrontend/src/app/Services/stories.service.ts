import { Injectable } from '@angular/core';
import {Task} from '../tasks';
import {demoTasks} from '../mockTasks';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) { }

  getTask(): Task[] {
    let tasks: Task[];
    this.http.get('http://127.0.0.1:3000/story').subscribe(response=>{
      debugger;  
    tasks = response.stories;
      return tasks;
     });
  }
}

import { Injectable } from '@angular/core';
import {Task} from '../tasks';
import {demoTasks} from '../mockTasks';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) { }

  getTask(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/story');
  }
}

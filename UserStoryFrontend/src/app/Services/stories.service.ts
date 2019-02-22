import { Injectable } from '@angular/core';
import {Task} from '../tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  url = 'http://127.0.0.1:3000/';
  constructor(private http: HttpClient) { }

  getTask(): Observable<any> {
    return this.http.get(this.url + 'story');
  }
  createStory(story: Task): Observable<any> {
    return this.http.post(this.url + 'newStory', story );
  }
}

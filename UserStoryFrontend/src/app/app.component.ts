import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { MatDialog } from '@angular/material';
import { AddStoryComponent } from './add-story/add-story.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserStory';
  constructor(private dialog: MatDialog){}
  openDialog(){
    this.dialog.open(AddStoryComponent);
  }
}

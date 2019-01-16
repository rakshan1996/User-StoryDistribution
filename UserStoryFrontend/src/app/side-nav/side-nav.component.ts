import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddStoryComponent } from '../add-story/add-story.component';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private dialog: MatDialog ) { }

  openDialog() {
    this.dialog.open(AddStoryComponent);
    }

  ngOnInit() {
  }

}

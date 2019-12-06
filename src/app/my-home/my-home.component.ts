import { Component, OnInit } from '@angular/core';
import {MatDialog, } from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

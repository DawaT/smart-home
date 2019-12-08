import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>) {}
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  autoTicks = false;
  showTicks = false;
  // tslint:disable-next-line:variable-name
  private _tickInterval = 1;

  get tickInterval1(): number | 'auto' {
    return this.showTicks ? (this.autoTicks1 ? 'auto' : this._tickInterval1) : 0;
  }
  set tickInterval1(value) {
    this._tickInterval1 = coerceNumberProperty(value);
  }
  autoTicks1 = false;
  showTicks1 = false;
  // tslint:disable-next-line:variable-name
  private _tickInterval1 = 1;

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

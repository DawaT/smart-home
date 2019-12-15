import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
// import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>) {
    }

    showTicks = false;
    showTicks1 = false;

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}

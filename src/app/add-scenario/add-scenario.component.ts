import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-add-scenario',
  templateUrl: './add-scenario.component.html',
  styleUrls: ['./add-scenario.component.scss']
})
export class AddScenarioComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _bottomSheetRef: MatBottomSheetRef<AddScenarioComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

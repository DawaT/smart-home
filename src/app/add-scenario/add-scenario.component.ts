import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-add-scenario',
  templateUrl: './add-scenario.component.html',
  styleUrls: ['./add-scenario.component.scss']
})
export class AddScenarioComponent implements OnInit {
  light = 'OFF';
  ac = 'OFF';

  setLight(e) {
    if (e.checked) {
      this.light = 'ON';
    } else {
      this.light = 'OFF';
    }
  }

  setAC(e) {
    if (e.checked) {
      this.ac = 'ON';
    } else {
      this.ac = 'OFF';
    }
  }

  // tslint:disable-next-line:variable-name
  constructor(private _bottomSheetRef: MatBottomSheetRef<AddScenarioComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this._bottomSheetRef.dismiss();
    // event.preventDefault();
  }
}

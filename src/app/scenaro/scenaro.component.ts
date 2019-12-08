import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material';
import {AddScenarioComponent} from '../add-scenario/add-scenario.component';

@Component({
  selector: 'app-scenaro',
  templateUrl: './scenaro.component.html',
  styleUrls: ['./scenaro.component.scss']
})
export class ScenaroComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }
  openBottomSheet(): void {
    this._bottomSheet.open(AddScenarioComponent);
  }
}

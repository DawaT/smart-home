import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-condition',
  templateUrl: './air-condition.component.html',
  styleUrls: ['./air-condition.component.scss']
})
export class AirConditionComponent implements OnInit {
 // public sliderVal = 24;
  public  gridsize = 30;
  constructor() { }

  ngOnInit() {
  }
  // onChange(event) {
  //   this.sliderVal = event.value;
  // }
    onChange(event) {
    this.gridsize = event.value;
    }

}

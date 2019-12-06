import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-lamp',
  templateUrl: './general-lamp.component.html',
  styleUrls: ['./general-lamp.component.scss']
})
export class GeneralLampComponent implements OnInit {

  public  gridsize = 30;
  constructor() { }

  ngOnInit() {
  }
  onChange(event) {
    this.gridsize = event.value;
  }
}

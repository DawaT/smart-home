import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  panelOpenState = false;
  panelOpenState1 = false;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor() { }

  ngOnInit() {
  }
  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
  togglePanel1() {
    this.panelOpenState1 = !this.panelOpenState1;
  }
  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
}

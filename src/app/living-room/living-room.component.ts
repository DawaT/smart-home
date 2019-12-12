import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-living-room',
    templateUrl: './living-room.component.html',
    styleUrls: ['./living-room.component.scss']
})
export class LivingRoomComponent implements OnInit {
    ac = 'OFF';
    light = 'ON';
    lamp = 'OFF';
    window = 'OPEN';
    lamp1 = 'OFF';

    setAC(e) {
        if (e.checked) {
            this.ac = 'ON';
        } else {
            this.ac = 'OFF';
        }
    }

    setLight(e) {
        if (e.checked) {
            this.light = 'ON';
        } else {
            this.light = 'OFF';
        }
    }

    setLamp(e) {
        if (e.checked) {
            this.lamp = 'ON';
        } else {
            this.lamp = 'OFF';
        }
    }

    setWindow(e) {
        if (e.checked) {
            this.window = 'OPEN';
        } else {
            this.window = 'CLOSED';
        }
    }

  setLamp1(e) {
    if (e.checked) {
      this.lamp1 = 'ON';
    } else {
      this.lamp1 = 'OFF';
    }
  }

    constructor() {
    }

    ngOnInit() {
    }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private  router: Router) { }

  name: string;
  username: string;
  email: string;
  password: string;

  ngOnInit() {
  }

  createAccount(): void {
    if (this.name !== '' || this.username !== '' || this.email !== '' || this.password === '') {
      this.router.navigate(['login']);
    } else {
      alert('Please, fill the required details');
    }

  }

}

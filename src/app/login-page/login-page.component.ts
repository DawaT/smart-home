import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private  router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }
  login(): void {
    if (this.username === 'selise' && this.password === 'selise') {
      this.router.navigate(['menu']);
    } else {
      alert('Invalid credentials.' + ' Login with password & username: selise');
    }

  }
}



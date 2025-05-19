import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HOME_PATH } from '../../app.routes';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {

  }

  login() {
    //after defining authentifictaion
    // Perform login logic here
    // After successful login, navigate to the home page
    this.router.navigate(['/' + HOME_PATH]);
  }

}

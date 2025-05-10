import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { environment } from '../environments/environment';
import { LoginComponent } from "./homePage/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'medIt-front';
test =environment.apiUrl


  ngOnInit(): void {
    initFlowbite();
  }
}

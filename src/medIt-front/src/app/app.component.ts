import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'medIt-front';
  test = environment.apiUrl


  ngOnInit(): void {
    initFlowbite();
  }
  ngAfterViewInit(): void {
    initFlowbite();
  }
}
